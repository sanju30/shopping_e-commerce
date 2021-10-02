import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/product-checkout/checkout-page/checkout-page.component';
import { MainPageComponent } from './components/shared/main-page/main-page/main-page.component';

const routes: Routes = [
  { path: 'shopping', component: MainPageComponent },
  { path: '**', component: MainPageComponent },  // Wildcard route for a 404 page
  { path: '',   redirectTo: '/MainPageComponent', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
