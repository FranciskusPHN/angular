import { Component } from '@angular/core';
import { Budgets } from '../../budgets';
import { Router } from '@angular/router';
import { BudgetsService } from '../../budgets.service';

@Component({
  templateUrl: 'budgets.component.html'
})
export class BudgetsComponent {

  budgets: Budgets[];

  constructor(
    private budgetsService: BudgetsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.budgetsService.getBudgets()
      .subscribe((data: Budgets[]) => {
        this.budgets = data;
        console.log('DATAAAAAAA' + this.budgets)
      })
  }

}