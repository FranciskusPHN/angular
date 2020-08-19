import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Units } from './units';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getUnits(): Observable<Units[]> {
    return this.http.get<Units[]>(this.apiServer + 'master/units');
  }

  getUnitById(id: number): Observable<any> {
    return this.http.get(this.apiServer + `master/units/${id}`);
  }
}
