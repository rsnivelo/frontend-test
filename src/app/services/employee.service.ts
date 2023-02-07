import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.apiURL}/employees`);
  }

  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.apiURL}/employees`, employee);
  }

  getEmployeeById(id:number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.apiURL}/employees/${id}`);
  }

  updateEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.apiURL}/employees`, employee);
  }
}
