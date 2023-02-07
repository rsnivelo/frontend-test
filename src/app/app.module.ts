import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterpriseFormComponent } from './enterprise-form/enterprise-form.component';
import { FormsModule } from '@angular/forms';
import { EnterpriseEditComponent } from './enterprise-edit/enterprise-edit.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentEditComponent } from './components/department-edit/department-edit.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterpriseListComponent,
    EnterpriseFormComponent,
    EnterpriseEditComponent,
    DepartmentListComponent,
    DepartmentFormComponent,
    DepartmentEditComponent,
    EmployeeEditComponent,
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
