import { Component, OnInit } from '@angular/core';
import { Categories } from '../../categories';
import { Router } from '@angular/router';
import { CategoriesService } from '../../categories.service';

@Component({
  templateUrl: 'categories.component.html'
})
export class CategoriesComponent implements OnInit{

  categories: Categories[];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    // this.employeeService.getEmployees()
    //   .subscribe((response) => {
    //     this.employees = response;
    //   });
    this.categoriesService.getCategories()
      .subscribe((data: Categories[]) =>{
        this.categories = data;
        // console.log(this.categories)
      })
  }
}