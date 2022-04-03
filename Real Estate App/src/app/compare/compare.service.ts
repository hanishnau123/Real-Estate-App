import { Injectable } from '@angular/core';
import { Listing } from '../rent/listing.model';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  compareProperties: Listing[] = [];

  constructor() { }

  addToCompare(listing: Listing){
    this.compareProperties.push(listing);
  }

}
