import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {

  @Input() productDetails!: Product;

  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
  }
  
  /**Send the product details to the cart  */
  public onClickOfAddCart(): void {
    this.messenger.getProductDetails(this.productDetails);
  }
}
