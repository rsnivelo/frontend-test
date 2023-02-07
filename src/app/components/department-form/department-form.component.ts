import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise, EnterpriseDTO } from 'src/app/enterprise';
import { EnterpriseService } from 'src/app/enterprise.service';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {

  department: Department = new Department();
  enterprises: EnterpriseDTO[];

  constructor(private departmentService: DepartmentService, 
              private enterpriseService: EnterpriseService,
              private router: Router) {
  }

  ngOnInit() {
    this.enterpriseService.getEnterprises().subscribe(
      response => {
        this.enterprises = [...response];
      }
    );
  }

  onSubmit() {
    console.log(this.department);
    this.save();
  }

  save() {
    this.departmentService.createDepartment(this.department.enterpriseId, this.department).subscribe(response => {
      console.log(response);
      swal(
        'Department saved',
        'You have successfully saved!',
        'success'
      )
      this.router.navigate(['/departments']);
    }, error => console.log(error));

    
  }
}
