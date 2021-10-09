import { Injectable } from '@angular/core';
import { Product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO : API
  products: Product[] = [
    new Product("1", "Why Not Me ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever .", 200, "https://images-na.ssl-images-amazon.com/images/I/51GGyNxi24L._SX322_BO1,204,203,200_.jpg"),
    new Product("2", "Rudest Book Ever ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 300, "https://images-eu.ssl-images-amazon.com/images/I/51rVr4utFRL._AC_SX368_.jpg"),
    new Product("3", "The Subtle Art of Not Giving a F*ck ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 350, "https://cdn.shopify.com/s/files/1/0421/4299/0495/products/THESUBTLEARTOFNOTGIVINGAF_480x.jpg?v=1627242896"),
    new Product("4", "The Alchemist ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 200, "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL480_QL65_.jpg"),
    new Product("5", "The Psychology of Money", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 178, "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"),
    new Product("7", "The Silent Patient", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 299, "https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg"),
    new Product("8", "The Alchemist ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 200, "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL480_QL65_.jpg"),
    new Product("9", "The Psychology of Money", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 178, "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"),
    new Product("10", "The Silent Patient", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 299, "https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg"),
    new Product("11", "Rudest Book Ever ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever . ", 300, "https://images-eu.ssl-images-amazon.com/images/I/51rVr4utFRL._AC_SX368_.jpg"),
  ]

  /**Function to get the data from the product API */
  public getProducts(): Product[] {
    return this.products;
  }
}
