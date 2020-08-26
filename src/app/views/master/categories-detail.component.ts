import { Categories } from '../../categories';
import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { CategoriesComponent } from './categories.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  categories: Categories;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoriesService) { }

  ngOnInit() {
    // this.categories = new Categories();

    this.id = this.route.snapshot.params.id;

    this.categoryService.getCategorie(this.id)
      .subscribe(data => {
        this.categories = data;
        console.log(this.categories)
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['categories']);
  }
}