import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Budgets } from './budgets';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiServer = "http://com-danliris-service-core-dev.azurewebsites.net/v1/";

  constructor(
    private http: HttpClient
  ) { }

  getBudgets(): Observable<Budgets[]> {
    return this.http.get<Budgets[]>(this.apiServer + 'master/budgets');
  }

  getBudget(id: number): Observable<any> {
    return this.http.get(this.apiServer + `master/budgets/${id}`);
  }

  deleteBudget(id: number): Observable<any> {
    return this.http.delete(this.apiServer + `master/budgets/${id}`, { responseType: 'text' });
  }
}
