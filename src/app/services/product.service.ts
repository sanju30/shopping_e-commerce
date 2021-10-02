import { Injectable } from '@angular/core';
import { Product } from '../modal/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //TODO : API
  products: Product[] = [
    new Product("1", "Why Not Me ", "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a .", 200, "https://images-na.ssl-images-amazon.com/images/I/51GGyNxi24L._SX322_BO1,204,203,200_.jpg"),
    new Product("2", "Rudest Book Ever ", "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it  ", 300, "https://images-eu.ssl-images-amazon.com/images/I/51rVr4utFRL._AC_SX368_.jpg"),
    new Product("3", "The Subtle Art of Not Giving a F*ck ", "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or rand that it using me  ", 350, "https://cdn.shopify.com/s/files/1/0421/4299/0495/products/THESUBTLEARTOFNOTGIVINGAF_480x.jpg?v=1627242896"),
    new Product("4", "The Alchemist ", "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard ", 200, "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UL480_QL65_.jpg"),
    new Product("5", "The Psychology of Money", "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum  ", 178, "https://images-na.ssl-images-amazon.com/images/I/41cWqh0OeQL._SX321_BO1,204,203,200_.jpg"),
    new Product("7", "The Silent Patient", "There are many always free from repetition, injected humour, or non-characteristic words etc.  many always free from repetition Sections 1.10.32 and 1.10.33 from s ", 299, "https://images-na.ssl-images-amazon.com/images/I/51OuP0mmnwL._SX322_BO1,204,203,200_.jpg"),
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }
}
