import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  addCartInfo = new Subject(); 

  constructor() { }

  getProductDetails(product:Product) {
    this.addCartInfo.next(product);
  }

  sendCartInfo() {
    return this.addCartInfo.asObservable();
  }
}
