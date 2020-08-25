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
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldjIiLCJwcm9maWxlIjp7ImZpcnN0bmFtZSI6IlRlc3QiLCJsYXN0bmFtZSI6IlVuaXQiLCJnZW5kZXIiOiJNIiwiZG9iIjoiMjAxNy0wMi0xN1QxODozNToyMyswNzowMCIsImVtYWlsIjoiZGV2QHVuaXQudGVzdCJ9LCJwZXJtaXNzaW9uIjp7IlBJIjo3LCJQNyI6NywiUDQiOjcsIlA2Ijo3LCJQMyI6NywiUDEiOjcsIkI0Ijo2LCJVVC9VTklULzAxIjo3LCJDOSI6NywiRjEiOjYsIkI5Ijo2LCJBMiI6NywiRjIiOjd9LCJpYXQiOjE1OTUzODEyNTB9.7Ur22latQemm_loOYWU7G8QDfE7HyXXqv9NJIFYsTMk