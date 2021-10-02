import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productDetails!: Product;

  constructor(private messenger: MessengerService) { }

  ngOnInit(): void {
  }

  onClickOfAddCart()
  {
    this.messenger.getProductDetails(this.productDetails);
  }
}
