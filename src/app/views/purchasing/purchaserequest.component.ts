import { Component, OnInit } from '@angular/core';
import { PurchaseRequests } from '../../purchase-request';
import { Router } from '@angular/router';
import { PurchaseRequestService } from '../../purchase-request.service';

@Component({
  templateUrl: 'purchaserequest.component.html'
})
export class PurchaseRequestComponent implements OnInit{

    purchaserequests: PurchaseRequests[];

    constructor(
      private purchaseRequestService : PurchaseRequestService,
      private router: Router
    ) { }
    
    ngOnInit() {
      this.reloadData();
    }
  
    reloadData(): void {
      this.purchaseRequestService.getPurchaseRequests()
        .subscribe((data: PurchaseRequests[]) =>{
          this.purchaserequests = data;
          console.log(this.purchaserequests)
        })
    }
  
    categorieDetails(id: number) {
      this.router.navigate(['details', id]);
    }

}
