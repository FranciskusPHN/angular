import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { BudgetsComponent } from './budgets.component';
import { CategoriesComponent } from './categories.component';
import { ProductsComponent } from './products.component';
import { FormsComponent } from './forms.component';
// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';
// import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
// import { PaginationsComponent } from './paginations.component';
// import { PopoversComponent } from './popovers.component';
// import { ProgressComponent } from './progress.component';
// import { TooltipsComponent } from './tooltips.component';
// import { NavbarsComponent } from './navbars/navbars.component';

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
      // {
      //   path: 'switches',
      //   component: SwitchesComponent,
      //   data: {
      //     title: 'Switches'
      //   }
      // },
      // {
      //   path: 'tables',
      //   component: TablesComponent,
      //   data: {
      //     title: 'Tables'
      //   }
      // },
      // {
      //   path: 'tabs',
      //   component: TabsComponent,
      //   data: {
      //     title: 'Tabs'
      //   }
      // },
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
      // {
      //   path: 'paginations',
      //   component: PaginationsComponent,
      //   data: {
      //     title: 'Pagination'
      //   }
      // },
      // {
      //   path: 'popovers',
      //   component: PopoversComponent,
      //   data: {
      //     title: 'Popover'
      //   }
      // },
      // {
      //   path: 'progress',
      //   component: ProgressComponent,
      //   data: {
      //     title: 'Progress'
      //   }
      // },
      // {
      //   path: 'tooltips',
      //   component: TooltipsComponent,
      //   data: {
      //     title: 'Tooltips'
      //   }
      // },
      // {
      //   path: 'navbars',
      //   component: NavbarsComponent,
      //   data: {
      //     title: 'Navbars'
      //   }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
