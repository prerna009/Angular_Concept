import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-emp-details-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './emp-details-form.component.html',
  styleUrl: './emp-details-form.component.css',
})
export class EmpDetailsFormComponent implements OnInit {
  empForm: FormGroup;
  action: 'add' | 'edit' = 'add';
  empId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private dialogRef: MatDialogRef<EmpDetailsFormComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.action = data?.action || 'add';
    this.empId = data?.empId || null;

    this.empForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      emailID: ['', [Validators.email]],
      mobileNo: [0, Validators.required],
      hobbies: this.fb.array([]),
      skills: this.fb.array([]),
      address: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        pincode: [0, Validators.required],
      }),
    });
  }

  ngOnInit(): void {
    debugger
    if (this.action === 'edit' && this.empId !== null) {
      this.patchEmployeeValues(this.empId);
    }
  }

  patchEmployeeValues(id: number) {
    this.empService.getEmployeeById(id).subscribe((res) => {
      this.empForm.patchValue({
        name: res.name,
        emailID: res.emailID,
        mobileNo: res.mobileNo,
        address: res.address,
      });

      this.hobbies.clear();
      res.hobbies.forEach((hobby) => {
        this.hobbies.push(
          this.fb.group({
            hobbyId: hobby.hobbyId,
            Value: hobby.Value,
          })
        );
      });

      this.skills.clear();
      res.skills.forEach((skill) => {
        this.skills.push(
          this.fb.group({
            skillId: skill.skillId,
            Value: skill.Value,
          })
        );
      });
    });
  }

  get hobbies(): FormArray {
    return this.empForm.get('hobbies') as FormArray;
  }

  get skills(): FormArray {
    return this.empForm.get('skills') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.group({ hobbyId: [null], Value: [''] }));
  }

  addSkill() {
    this.skills.push(this.fb.group({ skillId: [null], Value: [''] }));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  buildHobbyOptions() {
    let maxId = 0;
    this.hobbies.controls.forEach((ctrl) => {
      if (ctrl.value.hobbyId && ctrl.value.hobbyId > maxId) {
        maxId = ctrl.value.hobbyId;
      }
    });

    return this.hobbies.controls.map((ctrl) => ({
      hobbyId: ctrl.value.hobbyId ? ctrl.value.hobbyId : ++maxId,
      Value: ctrl.value.Value
    }));
  }

  buildSkillOptions() {
    let maxId = 0;
    this.skills.controls.forEach((ctrl) => {
      if (ctrl.value.skillId && ctrl.value.skillId > maxId) {
        maxId = ctrl.value.skillId;
      }
    });

    return this.skills.controls.map((ctrl) => ({
      skillId: ctrl.value.skillId ? ctrl.value.skillId : ++maxId,
      Value: ctrl.value.Value
    }));
  }

  submit() {
    if (this.empForm.invalid) return;

    const controls = this.empForm.value;
    const params = {
      name: controls.name,
      emailID: controls.emailID,
      mobileNo: controls.mobileNo,
      hobbies: this.buildHobbyOptions(),
      skills: this.buildSkillOptions(),
      address: controls.address,
    };

    if (this.action === 'add') {
      this.empService.addEmployeeDetail(params).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else if (this.action === 'edit' && this.empId !== null) {
       const updatePayload = {
      ...params,
      id: this.empId
    };
      this.empService.updateEmployeeDetail(updatePayload, this.empId).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  onCancel() {
    if (this.dialogRef) this.dialogRef.close(false);
  }
}
