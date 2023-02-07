import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiURL}/departments`);
  }

  createDepartment(enterpriseId: number, department: Department): Observable<Object> {
    return this.httpClient.post(`${this.apiURL}/enterprises/${enterpriseId}/departments`, department);
  }

  updateDepartment(id: number, department: Department): Observable<Object> {
    return this.httpClient.put(`${this.apiURL}/departments/${id}`, department);
  }

  getDepartmentById(id:number): Observable<Department> {
    return this.httpClient.get<Department>(`${this.apiURL}/departments/${id}`);
  }

  getDepartmentsWithEnterprise(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.apiURL}/enterprises/departments`);
  }
}
