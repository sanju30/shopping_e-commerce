import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /** To navigate from cart icon to check out page */
  public navigateCheckout = new Subject<string>();

  /** Function that tells us to move it the checkout page */
  public navigateToCheckout(): void {
    this.navigateCheckout.next('checkout');
  }

  /** Observable */
  public moveToCheckout() : Observable<string> {
    return this.navigateCheckout.asObservable();
  }
}
