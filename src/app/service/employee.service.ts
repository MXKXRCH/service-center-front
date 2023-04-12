import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url! : string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'employee';
  }
 
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "/all");
  }
}
