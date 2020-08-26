import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CategoriesService } from '../../../categories.service';
import { ProductsService } from '../../../products.service';
import { BudgetService } from '../../../budget.service';
import { UnitService } from '../../../unit.service';

import { Categories } from '../../../categories';
import { Products } from '../../../products';
import { Budgets } from '../../../budgets';
import { Units } from '../../../units';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  parameterName: string;
  nameHeader: string;

  constructor(
    private route: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private budgetsService: BudgetService,
    private unitsService: UnitService,
  ) { }

  gridData: any[];
  colData: any[];

  IsCategories: boolean;
  IsProducts: boolean;
  IsBudgets: boolean;
  IsUnits: boolean;

  ngOnInit(): void {
    // this.parameterName = this.route.snapshot.routeConfig.data.title;
    this.nameHeader = "List " + "Units";
    this.getEntity("Units");
    this.reloadData();
  }

  getEntity(entitiy){
    console.log(entitiy)
    switch (entitiy) {
      case 'Categories': return this.getCategoriesData();
      case 'Products': return this.getProductData();
      case 'Budgets': return this.getBudgetData();
      case 'Units': return this.getUnitData();
      // default: return 'Employee';
    }
  }

  getCategoriesData() {
    this.colData =  [
      { field:'code', header:'Kode'},
      { field:'name', header:'Nama'},
      { field:'', header:'Action'},
    ]
    this.IsCategories = true;
  }

  getProductData() {
    this.colData =  [
      { field:'Code', header:'Kode Barang'},
      { field:'Name', header:'Nama Barang'},
      { field:'UOM.Unit', header:'Satuan Default'},
      { field:'Currency.Code', header:'Mata Uang'},
      { field:'Price', header:'Harga Barang'},
      { field:'Tags', header:'Tags'},
      { field:'', header:'Action'},
    ]
    // this.tableHeader = [
    //   { Header1: 'Kode Barang', Header2: 'Nama Barang', Header3: 'Satuan Default', Header4: 'Mata Uang', Header5: 'Harga Barang', Header6: 'Tags', Header7: 'Action' }
    // ]
    this.IsProducts = true;
  }

  getBudgetData() {
    this.colData =  [
      { field:'code', header:'Kode'},
      { field:'name', header:'Nama'},
      { field:'', header:'Action'},
    ]
    this.IsBudgets = true;
  }

  getUnitData() {
    this.colData =  [
      { field:'Code', header:'Kode'},
      { field:'Division.Name', header:'Nama Divisi'},
      { field:'Name', header:'Nama Unit'},
      { field:'', header:'Action'},
    ]
    this.IsUnits = true;
  }

  reloadData() {
    if (this.parameterName == "Categories") {
      this.categoriesService.getCategories()
        .subscribe((data: Categories[]) => {
          this.gridData = data;
          // console.log(this.categories)
        })
    }

    else if (this.parameterName == "Products") {
      this.productsService.getProducts()
        .subscribe((data: Products[]) => {
          this.gridData = data;
          // console.log(this.products)
        })
    }

    else if (this.parameterName == "Budgets") {
      this.budgetsService.getBudgets()
        .subscribe((data: Budgets[]) => {
          this.gridData = data;
        })
    }

    else if (this.parameterName == "Units") {
      this.unitsService.getUnits()
        .subscribe((data: Units[]) => {
          this.gridData = data;
          // console.log(this.gridData)
        })
    }

  }

}
