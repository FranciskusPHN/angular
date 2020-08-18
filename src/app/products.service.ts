import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiServer + 'master/products');
  }
}
