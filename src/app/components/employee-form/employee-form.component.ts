import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  
  employee: Employee = new Employee();
  departments: Department[];
  
  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private router: Router) {}

  ngOnInit(): void {
    this.departmentService.getDepartmentsWithEnterprise().subscribe(
      response => { 
        this.departments = [...response];
      }, error => console.log(error)); 
  }

  onSubmit() {
    console.log(this.departments);
    this.save();
  }

  save() {
    this.employeeService.createEmployee(this.employee).subscribe(response => {
      console.log(response);
      swal(
        'Employee saved',
        'You have successfully saved!',
        'success'
      )
      this.router.navigate(['/employees']);
    }, error => console.log(error));

    
  }

}
