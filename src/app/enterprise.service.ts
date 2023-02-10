import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Enterprise } from './enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private baseURL = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getEnterprises(): Observable<Enterprise[]> {
    return this.httpClient.get<Enterprise[]>(`${this.baseURL}`);
  }

  createEnterprise(enterprise: Enterprise): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, enterprise);
  }

  updateEnterprise(id: number, enterprise: Enterprise): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, enterprise);
  }

  getEnterpriseById(id:number):Observable<Enterprise>{
    return this.httpClient.get<Enterprise>(`${this.baseURL}/${id}`);
  }
}
