import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gadget } from '../model/gadget';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GadgetService {
  private url! : string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'gadget';
  }
 
  public findAll(): Observable<Gadget[]> {
    return this.http.get<Gadget[]>(this.url + "/all");
  }

  public post(gadget: Gadget, typeId: number) {
    return this.http.post<Gadget>(this.url + "/" + typeId, gadget);
  }

  public delete(id : number) {
    return this.http.delete(this.url + "/" + id);
  }
}
