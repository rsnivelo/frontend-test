import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnterpriseDTO } from 'src/app/enterprise';
import { EnterpriseService } from 'src/app/enterprise.service';
import { Department } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent {

  id: number;
  department: Department = new Department();
  enterprises: EnterpriseDTO[];
  
  constructor(private departmentService: DepartmentService, 
              private enterpriseService: EnterpriseService,
              private router: Router, 
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.enterpriseService.getEnterprises().subscribe(
      response => {
        this.enterprises = [...response];
      }
    );
    this.departmentService.getDepartmentById(this.id).subscribe(result => {
      this.department = result;
    }, error => console.log(error));
  }

  onSubmit() {
    console.log(this.department);
    this.departmentService.updateDepartment(this.id, this.department).subscribe(result => {
      this.router.navigate(['/departments']);
      swal(
        'Department saved',
        'You have successfully updated your data!',
        'success'
      )
    },error => console.log(error));
  }
}
