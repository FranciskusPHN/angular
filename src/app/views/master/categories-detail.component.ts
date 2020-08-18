import { Categories } from '../../categories';
import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { CategoriesComponent } from './categories.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  //styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  employee: Categories;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoriesService) { }

  ngOnInit() {
    this.employee = new Categories();

    this.id = this.route.snapshot.params.id;

    this.categoryService.getCategorie(this.id)
      .subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['categories']);
  }
}