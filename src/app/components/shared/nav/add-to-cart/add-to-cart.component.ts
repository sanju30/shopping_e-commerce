import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { RemoveFromCartService } from 'src/app/services/remove-from-cart.service';
import { CartItems, Products } from 'src/interface/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  private productsList!: Product[];

  private cartItems: CartItems[] = [];

  public cartBadge = 0;

  /**Remove product from the cart  */
  private removeProductFormCart(productId: string): void {
    this.cartItems.forEach((items) => {
      if (items.productId === productId) {
        this.cartBadge = this.cartBadge - items.qty;
        this.cartItems = this.cartItems.filter((data) => data.productId != productId)
      }
    })
  }

  /**Add product to the cart  */
  private addProductToCart(product: Products): void {
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })
    this.cartBadge = 0;
    this.cartItems.forEach(() => {
      this.cartBadge++;
    })
  }

  constructor(private messenger: MessengerService, private navigation: NavigationService, private removeFromCart: RemoveFromCartService) { }

  ngOnInit(): void {
    this.messenger.sendCartInfo().subscribe((product) => {
      this.addProductToCart(product)
    })
    this.removeFromCart.sendProductDetails().subscribe((productId) =>
      this.removeProductFormCart(productId))
  }
 
  /**Navigate to the check put page  */
  public navigateToCheckoutPage(): void {
    this.navigation.navigateToCheckout();
  }

}
