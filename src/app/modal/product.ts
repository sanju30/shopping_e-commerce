export class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;


    constructor(id = "No ID Found", name = "No name Found", description = "No Description found", price = 0, image = "https://bitsofco.de/content/images/2018/12/broken-1.png") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}