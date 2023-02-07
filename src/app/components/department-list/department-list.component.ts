import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService:DepartmentService, private router: Router) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments() {
    this.departmentService.getDepartments().subscribe(results => {
      this.departments = results;
    })
  }

  updateDepartment(id: number) {
    this.router.navigate(['department-edit', id]);
  }

}
