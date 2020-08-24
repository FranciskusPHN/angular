// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { CardsComponent } from './cards.component';

import { BudgetsComponent } from './budgets.component';

import { CategoriesComponent } from './categories.component';
import { ProductsComponent } from './products.component';

// Forms Component
import { FormsComponent } from './forms.component';

// import { SwitchesComponent } from './switches.component';
// import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { TabsComponent } from './tabs.component';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { PopoversComponent } from './popovers.component';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
// import { PaginationsComponent } from './paginations.component';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
// import { ProgressComponent } from './progress.component';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// import { TooltipsComponent } from './tooltips.component';

// navbars
// import { NavbarsComponent } from './navbars/navbars.component';

import {NgxPaginationModule} from 'ngx-pagination';

// Components Routing
import { MasterRoutingModule } from './master-routing.module';
import { CategoryComponent } from './category/category.component';
import { CommonCmpComponent } from './common-cmp/common-cmp.component';
import { DetailCmpComponent } from './detail-cmp/detail-cmp.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderCmpComponent } from './header-cmp/header-cmp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MasterRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule
  ],
  declarations: [
    // CardsComponent,
    BudgetsComponent,
    CategoriesComponent,
    ProductsComponent,
    FormsComponent,
    // SwitchesComponent,
    // TablesComponent,
    // TabsComponent,
    // CarouselsComponent,
    CollapsesComponent,
    ProductsComponent,
    CategoryComponent,
    CommonCmpComponent,
    DetailCmpComponent,
    HeaderCmpComponent
    // PaginationsComponent,
    // PopoversComponent,
    // ProgressComponent,
    // TooltipsComponent,
    // NavbarsComponent
  ]
})
export class MasterModule { }
