import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiServer + 'master/categories');
  }

  getCategorie(id: number): Observable<any> {
    return this.http.get(this.apiServer + `master/categories/${id}`);
  }
}
