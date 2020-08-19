import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { BudgetsComponent } from './budgets.component';
import { CategoriesComponent } from './categories.component';
import { ProductsComponent } from './products.component';
import { FormsComponent } from './forms.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: '',
        redirectTo: 'budgets'
      },
      {
        path: 'budgets',
        component: BudgetsComponent,
        data: {
          title: 'Budget'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'categories',
        component: CategoriesComponent,
        data: {
          title: 'Categories'
        }
      },
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
