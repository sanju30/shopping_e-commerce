import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  productsList!: Product[];
  cartItems: any[] = [];
  cartBadge = 0;
  
  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
    this.messenger.sendCartInfo().subscribe((product: any) => {
      this.addProductToCart(product)
    })
  }

  addProductToCart(product: any) {
    this.cartItems.push({
      productId: product.id,
      productName: product.name,
      qty: 1,
      price: product.price
    })
    this.cartBadge = 0;
    this.cartItems.forEach((item) => {
      this.cartBadge ++ ;
    })
  }


}
