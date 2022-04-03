import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CompareComponent } from '../compare/compare.component';
import { RentComponent } from '../rent/rent.component';

const appRoutes : Routes = [
    { path: '', component: RentComponent },
    { path: 'buy', component: RentComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'auth', component: AuthComponent }
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }