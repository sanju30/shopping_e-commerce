import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { RemoveFromCartService } from 'src/app/services/remove-from-cart.service';
import { CartItems, Products } from 'src/interface/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {

  public cartItems: CartItems[] = [];

  public cartTotal = 0;

  /**Get the total item in cart */
  private findCartTotal(): void {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  /**Remove the product detail from cart */
  private removeProductDetailFromCart(productId: string): void {
    this.cartItems = this.cartItems.filter((data) => data.productId != productId)
    this.findCartTotal();
  }

  /**Add product to the cart */
  private addProductToCart(product: Products): void {
    let productExist = false;

    //Add a new product 
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    // if product already exists 
    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
        image: product.image
      })
    }
    this.findCartTotal();
  }

  constructor(private messenger: MessengerService, private removeFromCart: RemoveFromCartService) { }

  public ngOnInit(): void {
    this.messenger.sendCartInfo().subscribe((product) => {
      this.addProductToCart(product)
    })
    this.removeFromCart.sendProductDetails().subscribe((productId) =>
      this.removeProductDetailFromCart(productId))
  }






}
