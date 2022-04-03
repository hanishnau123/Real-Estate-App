import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RentComponent } from './rent/rent.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CompareComponent } from './compare/compare.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingService } from './rent/listing.service';
import { CompareService } from './compare/compare.service';
import { SpinnerComponent } from './assets/spinner/spinner.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentComponent,
    CompareComponent,
    SpinnerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ListingService, CompareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
