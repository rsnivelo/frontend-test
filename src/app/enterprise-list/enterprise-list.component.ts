import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.css']
})
export class EnterpriseListComponent implements OnInit {

  enterprises:Enterprise[];

  constructor(private enterpriseService:EnterpriseService, private router: Router) {}

  ngOnInit(): void {
    this.getEnterprises();
  }

  private getEnterprises() {
    this.enterpriseService.getEnterprises().subscribe(results => {
      this.enterprises = results;
    })
  }

  updateEnterprise(id: number) {
    this.router.navigate(['enterprise-edit', id]);
  }
}
