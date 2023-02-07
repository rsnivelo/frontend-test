import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-edit',
  templateUrl: './enterprise-edit.component.html',
  styleUrls: ['./enterprise-edit.component.css']
})
export class EnterpriseEditComponent implements OnInit {

  id: number;
  enterprise: Enterprise = new Enterprise();
  
  constructor(private enterpriseService: EnterpriseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.enterpriseService.getEnterpriseById(this.id).subscribe(result => {
      this.enterprise = result;
    }, error => console.log(error));
  }

  onSubmit(){
    this.enterpriseService.updateEnterprise(this.id,this.enterprise).subscribe(result => {
      this.router.navigate(['/enterprises']);
      swal(
        'Enterprise saved',
        'You have successfully updated your data!',
        'success'
      )
    },error => console.log(error));
  }
  
}
