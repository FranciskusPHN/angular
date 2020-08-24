import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { CategoriesService } from '../../../categories.service';
import { ProductsService } from '../../../products.service';
import { BudgetService } from '../../../budget.service';
import { UnitService } from '../../../unit.service';

import { Categories } from '../../../categories';
import { Products } from '../../../products';
import { Budgets } from '../../../budgets';
import { Units } from '../../../units';

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

  categories: Categories[];
  products: Products[];
  budgets: Budgets[];
  units: Units[];

  //==================

  totalRecords: String;
  page:Number=1;

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
    this.colData =  [
      { field:'code', header:'Kode'},
      { field:'name', header:'Nama'},
      { field:'', header:'Action'},
    ]
    // this.tableHeader = [
    //   { Header1: 'Kode', Header2: 'Nama', Header3: 'Action' }
    // ]
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
          this.gridData = data.data;
          // console.log(this.categories)
        })
    }

    else if (this.parameterName == "Products") {
      this.productsService.getProducts()
        .subscribe((data: Products[]) => {
          this.gridData = data.data;
          // console.log(this.products)
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
          // console.log(this.units)
        })
    }

  }

  deleteUnit(id: number){
    this.unitsService.deleteUnit(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  DetailsUnit(id: number){
    
    this.router.navigate(['detail-cmp', id]);
  }

}
