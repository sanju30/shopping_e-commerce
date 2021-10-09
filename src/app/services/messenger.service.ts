import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Products } from 'src/interface/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public addCartInfo = new Subject<Products>();

  /**Get product info that has to be sent to the cart */
  public getProductDetails(product: Products): void {
    this.addCartInfo.next(product);
  }

  /**Observable */
  public sendCartInfo(): Observable<Products> {
    return this.addCartInfo.asObservable();
  }
}
