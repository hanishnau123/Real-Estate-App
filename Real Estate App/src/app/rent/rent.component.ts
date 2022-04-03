import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CompareService } from '../compare/compare.service';
import { Listing } from './listing.model';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-buy',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  public listings: Listing[] = [];
  isFetchingData: boolean = true;
  errorHasOccured = null;

  constructor(private listingService: ListingService, private compareService: CompareService, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.getData();
  }

  addPropertyForCompare(index: number){
    this.compareService.addToCompare(this.listings[index]);
  }

  saveData(){
    this.http.post('https://angular-real-estate-app.firebaseio.com/listings.json', this.listings)
    .subscribe(resData => {
      console.log(resData);
    })
  }

  getData(){
    this.isFetchingData = true;
    this.listingService.getListingData().subscribe(resData => {
      this.isFetchingData = false;
      this.listings = resData;
    }, error => {
      this.errorHasOccured = error.error.error;
    });
  }

}
