import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  id: number;
  employee: Employee = new Employee();
  departments: Department[];

  constructor(private departmentService: DepartmentService, 
    private employeeService: EmployeeService,
    private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departmentService.getDepartmentsWithEnterprise().subscribe(
      response => { 
        this.departments = [...response];
      }, error => console.log(error)); 
      this.employeeService.getEmployeeById(this.id).subscribe(result => {
        this.employee = result;
      }, error => console.log(error));
  }

  onSubmit() {
    console.log(this.employee);
    this.employee.id = this.id;

    this.employeeService.updateEmployee(this.employee).subscribe(result => {
      this.router.navigate(['/employees']);
      swal(
        'Employee saved',
        'You have successfully updated your data!',
        'success'
      )
    },error => console.log(error));
  }
}
