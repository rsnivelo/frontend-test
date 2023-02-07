import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: Employee[];

  constructor(private employeeService:EmployeeService, private router: Router) {}
  
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployees().subscribe(results => {
      this.employees = results;
    })
  }

  updateEmployee(id: number) {
    this.router.navigate(['employee-edit', id]);
  }
}
