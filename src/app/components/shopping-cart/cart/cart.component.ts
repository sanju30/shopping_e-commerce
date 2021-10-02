import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [
    //   { id: "1", productId: "1", productName: "1 productName", qty: 4, price: 100 },
    //   { id: "2", productId: "2", productName: "2 productName", qty: 4, price: 1000 },
    //   { id: "3", productId: "3 ", productName: "3 productName", qty: 4, price: 400 }
  ]

  cartTotal = 0;

  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
    this.messenger.sendCartInfo().subscribe((product: any) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: { id: any; name: any; price: any; }) {

    let productExist = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        this.cartItems[i].qty++;
        productExist = true;
        break;
      }
    }

    if (!productExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
