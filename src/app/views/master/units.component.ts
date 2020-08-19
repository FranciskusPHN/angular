import { Component } from '@angular/core';
import { Units } from '../../units';
import { Router } from '@angular/router';
import { UnitsService } from '../../units.service';

@Component({
  templateUrl: 'units.component.html'
})
export class UnitsComponent {

  units: Units[];

  constructor(
    private unitsService: UnitsService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(): void {
    this.unitsService.getUnits()
      .subscribe((data: Units[]) => {
        this.units = data;
        console.log('DATAAAAAAA' + this.units)
      })
  }

}