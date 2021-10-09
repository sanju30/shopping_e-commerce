import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productsList!: Product[];

  constructor(private productService: ProductService) { }

  /**Get the product list from the service */
  ngOnInit(): void {
    this.productsList = this.productService.getProducts();
  }

}
