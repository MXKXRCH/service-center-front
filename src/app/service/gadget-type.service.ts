import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GadgetType } from '../model/gadget-type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GadgetTypeService {
  private url! : string;

  constructor(private http: HttpClient) {
    this.url = environment.apiUrl + 'gadgetType';
  }
 
  public findAll(): Observable<GadgetType[]> {
    return this.http.get<GadgetType[]>(this.url + "/all");
  }

  public post(gadgetType: GadgetType) {
    return this.http.post<GadgetType>(this.url, gadgetType);
  }

  public delete(id : number) {
    return this.http.delete(this.url + "/" + id);
  }
}
