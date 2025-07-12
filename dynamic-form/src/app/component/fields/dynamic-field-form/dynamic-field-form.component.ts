import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatRadioModule } from "@angular/material/radio";
import { FieldService } from '../../../service/field.service';

@Component({
  selector: 'app-dynamic-field-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule
  ],
  templateUrl: './dynamic-field-form.component.html',
  styleUrl: './dynamic-field-form.component.css',
})
export class DynamicFieldFormComponent implements OnInit {
  @Input() action: 'add' | 'edit' = 'add';
  @Input() fieldId: number | null = null;
  dynamicFieldForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private fieldService: FieldService,
    private dialogRef: MatDialogRef<DynamicFieldFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.action = data?.action || 'add';
    this.fieldId = data?.fieldId || null;

    this.dynamicFieldForm = this.fb.group({
      label: [''],
      type: [''],
      required: [false],
      options: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    if (this.action === 'edit' && this.fieldId !== null) {
      this.loadField(this.fieldId);
    }
  }

  get options(): FormArray {
    return this.dynamicFieldForm.get('options') as FormArray;
  }

  addOption(): void {
    this.options.push(this.fb.group({ Id: [null], Value: [''] }));
  }

  loadField(id: number) {
    this.fieldService.getDynamicFields(id).subscribe((res) => {
      this.dynamicFieldForm.patchValue({
        label: res.label,
        type: res.type,
        required: res.required,
      });

      this.options.clear();
      res.options.forEach((opt: any) => {
        this.options.push(
          this.fb.group({
            Id: opt.Id,
            Value: opt.Value,
          })
        );
      });
    });
  }

  removeOption(index: number) {
    this.options.removeAt(index);
  }

  buildOptions(): any[] {
    let maxId = 0;
    this.options.controls.forEach((ctrl) => {
      if (ctrl.value.Id && ctrl.value.Id > maxId) {
        maxId = ctrl.value.Id;
      }
    });
    return this.options.controls.map((ctrl) => ({
      Id: ctrl.value.Id ? ctrl.value.Id : ++maxId,
      Value: ctrl.value.Value,
    }));
  }

  submit() {
    const controls = this.dynamicFieldForm.value;
    const params = {
      label: controls.label,
      type: controls.type,
      required: controls.required,
      options: this.buildOptions(),
    };

    if (this.action === 'add') {
      this.fieldService.addDynamicField(params).subscribe(() => {
        this.dialogRef.close('refresh');
      });
    } else if (this.action === 'edit' && this.fieldId !== null) {
      this.fieldService
        .updateDynamicField(this.fieldId, params)
        .subscribe(() => {
          this.dialogRef.close(true);
        });
    }
  }

  onCancel() {
    if (this.dialogRef) {
      this.dialogRef.close(false);
    }
  }
}
