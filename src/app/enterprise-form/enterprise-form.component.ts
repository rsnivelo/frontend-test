import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-form',
  templateUrl: './enterprise-form.component.html',
  styleUrls: ['./enterprise-form.component.css']
})
export class EnterpriseFormComponent implements OnInit {

  enterprise: Enterprise = new Enterprise();

  constructor(private enterpriseService: EnterpriseService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.enterprise);
  }

  onSubmit() {
    this.save();
  }

  save() {
    this.enterpriseService.createEnterprise(this.enterprise).subscribe(response => {
      console.log(response);
      swal(
        'Enterprise saved',
        'You have successfully saved!',
        'success'
      )
      this.router.navigate(['/enterprises']);
    }, error => console.log(error));

    
  }
}
