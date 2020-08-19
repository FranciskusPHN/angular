import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { PurchaseRequests } from './purchase-request';

@Injectable({
  providedIn: 'root'
})
export class PurchaseRequestService {

  private apiServer = "https://com-danliris-service-purchasing-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  

  getPurchaseRequests() {
    let header = new HttpHeaders().set(
      "Authorization",
       localStorage.getItem("token")
    );
    return this.http.get<PurchaseRequests[]>(this.apiServer + 'purchase-requests', {headers:header});
  }
}  
