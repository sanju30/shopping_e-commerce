import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modal/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productsList!: Product[];

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productsList = this.productservice.getProducts();
  }

}