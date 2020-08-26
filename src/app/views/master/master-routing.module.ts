import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CardsComponent } from './cards.component';
// import { BudgetsComponent } from './budgets.component';
// import { CategoriesComponent } from './categories.component';
// import { ProductsComponent } from './products.component';
// import { FormsComponent } from './forms.component';
// import { CarouselsComponent } from './carousels.component';
// import { CollapsesComponent } from './collapses.component';
import { CommonCmpComponent } from './common-cmp/common-cmp.component';
import { DetailCmpComponent } from './detail-cmp/detail-cmp.component';
import { TestComponent } from './test/test.component';

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
        component: CommonCmpComponent,
        data: {
          title: 'Budgets'
        }
      },
      {
        path: 'units',
        component: CommonCmpComponent,
        data: {
          title: 'Units'
        }
      },
      {
        path: 'categories',
        component: CommonCmpComponent,
        data: {
          title: 'Categories'
        }
      },
      {
        path: 'products',
        component: CommonCmpComponent,
        data: {
          title: 'Products'
        }
      },
      // { path: 'detail-cmp/:id', component: DetailCmpComponent },
      {
        path: 'tests',
        component: TestComponent,
        data: {
          title: 'Test'
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
