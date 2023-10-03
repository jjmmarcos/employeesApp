import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full'},
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
  { path: 'employees', component: EmployeeCreateComponent },
  { path: 'edit/', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
