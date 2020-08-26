import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CategoriesService } from '../../../categories.service';
import { ProductsService } from '../../../products.service';
import { BudgetService } from '../../../budget.service';
import { UnitService } from '../../../unit.service';

import { Categories, categories } from '../../../categories';
import { Products, products } from '../../../products';
import { Budgets, budgets } from '../../../budgets';
import { Units, units } from '../../../units';

export interface ICommonEntity {
  Data1: string;
  Data2: string;
  Data3: string;
  Data4: string;
  Data5: string;
}

@Component({
  selector: 'app-common-cmp',
  templateUrl: './common-cmp.component.html',
  styleUrls: ['./common-cmp.component.css']
})
export class CommonCmpComponent implements OnInit {
  parameterName: string;
  tableHeader: any[];
  nameHeader: string;
  tblDataList: ICommonEntity[];

  IsCategories: boolean;
  IsProducts: boolean;
  IsBudgets: boolean;
  IsUnits: boolean;

  categories: Categories[] = categories;
  products: Products[] = products;
  budgets: Budgets[] = budgets;
  units: Units[] = units;

  // newcategories: categories;
  //==================

  totalRecords: String;
  page: Number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private budgetsService: BudgetService,
    private unitsService: UnitService,

  ) { }

  gridData: any[];
  colData: any[];

  ngOnInit(): void {
    this.parameterName = this.route.snapshot.routeConfig.data.title;
    this.nameHeader = "List " + this.parameterName;
    this.getEntity(this.parameterName);
    this.reloadData();
  }

  getEntity(entityName) {
    switch (entityName) {
      case 'Categories': return this.getCategoriesData();
      case 'Products': return this.getProductData();
      case 'Budgets': return this.getBudgetData();
      case 'Units': return this.getUnitData();
      // default: return 'Employee';
    }
  }

  getCategoriesData() {
    this.colData = this.categories;
    this.IsCategories = true;
  }

  getProductData() {
    this.colData = this.products;
    this.IsProducts = true;
  }

  getBudgetData() {
    this.colData = this.budgets;
    this.IsBudgets = true;
  }

  getUnitData() {
    this.colData = this.units;
    this.IsUnits = true;
  }

  reloadData() {
    if (this.parameterName == "Categories") {
      this.categoriesService.getCategories()
        .subscribe((data: Categories[]) => {
          this.gridData = data.data;
        })
    }

    else if (this.parameterName == "Products") {
      this.productsService.getProducts()
        .subscribe((data: Products[]) => {
          this.gridData = data.data;
        })
    }

    else if (this.parameterName == "Budgets") {
      this.budgetsService.getBudgets()
        .subscribe((data: Budgets[]) => {
          this.gridData = data.data;
        })
    }

    else if (this.parameterName == "Units") {
      this.unitsService.getUnits()
        .subscribe((data: Units[]) => {
          this.gridData = data.data;
        })
    }

  }

  deleteUnit(id: number) {
    this.unitsService.deleteUnit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  DetailsUnit(id: number) {

    this.router.navigate(['detail-cmp', id]);
  }

}
