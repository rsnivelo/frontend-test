import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EnterpriseEditComponent } from './enterprise-edit/enterprise-edit.component';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';

const routes: Routes = [
  { path: 'enterprises', component: EnterpriseListComponent},
  { path: 'enterprise-form', component: EnterpriseFormComponent},
  { path: 'enterprise-edit/:id', component: EnterpriseEditComponent},
  { path: 'departments', component: DepartmentListComponent},
  { path: 'department-form', component: DepartmentFormComponent},
  { path: 'department-edit/:id', component: DepartmentEditComponent},
  { path: 'employees', component: EmployeeListComponent},
  { path: 'employee-form', component: EmployeeFormComponent},
  { path: 'employee-edit/:id', component: EmployeeEditComponent},
  { path: '', redirectTo: 'enterprises', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
