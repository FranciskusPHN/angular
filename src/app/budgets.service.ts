import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budgets } from './budgets';

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getBudgets(): Observable<Budgets[]> {
    return this.http.get<Budgets[]>(this.apiServer + 'master/budgets');
  }

  getBudgetById(id: number): Observable<any> {
    return this.http.get(this.apiServer + `master/budgets/${id}`);
  }
}
