import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoveFromCartService {

  public removeFromCart = new Subject<string>();

  /** Function to get details of the product that has to be removed from the cart */
  public getProductDetails(productId: string): void {
    this.removeFromCart.next(productId);
  }

   /** observable */
  public sendProductDetails() : Observable<string> {
    return this.removeFromCart.asObservable();
  }
}