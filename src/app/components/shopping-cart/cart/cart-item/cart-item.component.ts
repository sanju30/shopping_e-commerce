import { Component, Input, OnInit } from '@angular/core';
import { RemoveFromCartService } from 'src/app/services/remove-from-cart.service';
import { CartItems } from 'src/interface/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {

  @Input() itemDetails!: CartItems;

  constructor(private removeFromCart: RemoveFromCartService) { }

  ngOnInit(): void {
  }

  /**Remove product from the cart*/
  public onRemoveCart(): void {
    this.removeFromCart.getProductDetails(this.itemDetails.productId)
  }

}
