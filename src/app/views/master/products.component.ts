import { Component, OnInit } from '@angular/core';
import { Products } from '../../products';
import { Router } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  templateUrl: 'products.component.html'
})
export class ProductsComponent implements OnInit{

  products: Products[];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.productsService.getProducts()
      .subscribe((data: Products[]) =>{
        this.products = data;
        console.log(this.products)
      })
  }

}   