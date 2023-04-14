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

  public post(employee: Employee) {
    return this.http.post<Employee>(this.url, employee);
  }

  public delete(id : number) {
    return this.http.delete(this.url + "/" + id);
  }
 
  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + "/all");
  }
}
