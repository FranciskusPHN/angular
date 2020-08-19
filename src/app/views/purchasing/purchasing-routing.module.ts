import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CardsComponent } from './cards.component';
// import { BudgetsComponent } from './budgets.component';
// import { CategoriesComponent } from './categories.component';
// import { ProductsComponent } from './products.component';
// import { FormsComponent } from './forms.component';
// // import { SwitchesComponent } from './switches.component';
// // import { TablesComponent } from './tables.component';
// // import { TabsComponent } from './tabs.component';
// import { CarouselsComponent } from './carousels.component';
// import { CollapsesComponent } from './collapses.component';
// // import { PaginationsComponent } from './paginations.component';
// // import { PopoversComponent } from './popovers.component';
// // import { ProgressComponent } from './progress.component';
// // import { TooltipsComponent } from './tooltips.component';
// // import { NavbarsComponent } from './navbars/navbars.component';

import { PurchaseRequestComponent } from './purchaserequest.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Purchasing'
    },
    children: [
      {
        path: '',
        redirectTo: 'purchaserequest'
      },
      {
        path: 'purchaserequest',
        component: PurchaseRequestComponent,
        data: {
          title: 'Purchase Request'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasingRoutingModule {}
