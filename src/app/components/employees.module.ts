import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ]
})
export class EmployeesModule { }
