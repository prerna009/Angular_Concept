import { Component } from '@angular/core';
import { FieldService } from '../../../service/field.service';
import { DynamicFieldFormComponent } from '../dynamic-field-form/dynamic-field-form.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field-list',
  standalone: true,
  imports: [
    DynamicFieldFormComponent,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './dynamic-field-list.component.html',
  styleUrl: './dynamic-field-list.component.css',
})
export class DynamicFieldListComponent {
  fields: any[] = [];
  displayedColumns: string[] = ['label', 'type', 'options', 'actions'];
  dataSource = new MatTableDataSource<any>(this.fields);
  searchText: string = '';

  constructor(private fieldService: FieldService, private dialog: MatDialog) {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const value = filter.trim().toLowerCase();
      return (
        data.label?.toLowerCase().includes(value) ||
        data.type?.toLowerCase().includes(value) ||
        data.options?.some((o: any) => o.Value.toLowerCase().includes(value))
      );
    };
  }

  ngOnInit(): void {
    this.loadFields();
  }

  loadFields(): void {
    this.fieldService.getAllFields().subscribe((res) => {
      this.fields = res;
      this.dataSource.data = this.fields;
    });
  }

 applyFilter() {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
  }

  openDialog(action: 'add' | 'edit', fieldId: number | null = null) {
    const dialogRef = this.dialog.open(DynamicFieldFormComponent, {
      width: '600px',
      data: { action, fieldId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'refresh' || result === true) {
        this.loadFields();
      }
    });
  }

  getOptionValues(field: any): string {
    return field.options?.map((opt: any) => opt.Value).join(', ') || '—';
  }

  deleteField(id: number) {
    this.fieldService.deleteField(id).subscribe(() => this.loadFields());
  }
}
