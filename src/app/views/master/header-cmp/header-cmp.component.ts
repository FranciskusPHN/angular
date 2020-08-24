import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-cmp',
  templateUrl: './header-cmp.component.html',
  styleUrls: ['./header-cmp.component.css']
})
export class HeaderCmpComponent implements OnInit {

  // @Input('header') header: any;
  @Input() GridData: any;
  @Input() ColData: any;


  parameterName: string;

  IsCategories: boolean;
  IsProducts: boolean;
  IsBudgets: boolean;
  IsUnits: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.parameterName = this.route.snapshot.routeConfig.data.title;
    this.getEntity(this.parameterName);
  }

  getEntity(EntityName){
    
    if(EntityName == "Budgets"){
      this.IsBudgets = true;
    }
    else if(EntityName == "Units"){
      this.IsUnits = true;
    }
    else if(EntityName == "Categories"){
      this.IsCategories = true;
    }
    else if(EntityName == "Products"){
      this.IsProducts = true;
    }
  }

}
