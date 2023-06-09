import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repair } from '../model/repair';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  private url! : string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'repair';
  }
 
  public findAll(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.url + "/all");
  }

  public post(repair: Repair) {
    return this.http.post<Repair>(this.url, repair);
  }

  public delete(id : number) {
    return this.http.delete(this.url + "/" + id);
  }
}
