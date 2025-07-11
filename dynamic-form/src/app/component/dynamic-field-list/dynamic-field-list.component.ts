import { Component } from '@angular/core';
import { FieldService } from '../../service/field.service';
import { DynamicFieldFormComponent } from '../dynamic-field-form/dynamic-field-form.component';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";

@Component({
  selector: 'app-dynamic-field-list',
  standalone: true,
  imports: [
    DynamicFieldFormComponent,
    CommonModule,
    MatDialogModule,
  ],
  templateUrl: './dynamic-field-list.component.html',
  styleUrl: './dynamic-field-list.component.css'
})
export class DynamicFieldListComponent {
  fields: any[] = [];
  selectedAction: 'add' | 'edit' = 'add';
  selectedFieldId: number | null = null;

  constructor(private fieldService: FieldService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadFields();
  }

  loadFields(): void {
    this.fieldService.getAllFields().subscribe((res) => {
      this.fields = res;
    });
  }

  onEdit(field: any): void {
    this.selectedAction = 'edit';
    this.selectedFieldId = field.id;
  }

  onAdd(): void {
    this.selectedAction = 'add';
    this.selectedFieldId = null;
  }

  openDialog(action: 'add' | 'edit', fieldId: number | null = null) {
  const dialogRef = this.dialog.open(DynamicFieldFormComponent, {
    width: '600px',
    data: { action, fieldId },
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'refresh') {
      this.loadFields(); 
    }
  });
}
}
