import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../../categories.service';
import { Categories } from '../../../categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input('category') category: any;

  categories: Categories[];

  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.categoriesService.getCategories()
      .subscribe((data: Categories[]) =>{
        this.categories = data;
        console.log(this.categories)
      })
  }

}
