import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  authUserToken: any;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getListingData(){
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.authUserToken = user.token;
    });

    return this.http.get('https://angular-real-estate-app.firebaseio.com/listings.json', {
      params: new HttpParams().set('auth', this.authUserToken)
    })
    .pipe(map(resData => {
      const listingArray = [];
      for( const key in resData ){
        //hasOwnProperty checks wether the key property is present in the object
        if( resData.hasOwnProperty(key) ){
          listingArray.push(...resData[key]);
        }
      }
      return listingArray;
    }))
  }

  setAuthTokenasNull(){
    this.authUserToken = null;
  }

}
