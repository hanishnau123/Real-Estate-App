import { Component, OnInit } from '@angular/core';
import { Listing } from '../rent/listing.model';
import { CompareService } from './compare.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compareListing: Listing[] = [];

  constructor(private compareService: CompareService) { }

  ngOnInit(): void {
    this.compareListing = this.compareService.compareProperties;
  }

}
