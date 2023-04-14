import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ordering } from '../model/ordering';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
  private url! : string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'ordering';
  }

  public getById(id : number): Observable<Ordering> {
    return this.http.get<Ordering>(this.url + "/" + id);
  }

  public findAll(): Observable<Ordering[]> {
    return this.http.get<Ordering[]>(this.url + "/all");
  }

  public post(ordering: Ordering) {
    return this.http.post<Ordering>(this.url + '/' + ordering.employee.id + '/' + ordering.gadget.id, ordering);
  }

  public put(ordering: Ordering) {
    return this.http.put<Ordering>(this.url + '/' + ordering.employee.id + '/' + ordering.gadget.id, ordering);
  }

  public delete(id : number) {
    return this.http.delete(this.url + "/" + id);
  }
}
