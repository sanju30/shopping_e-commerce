/** product */
export interface Products {
    id: string;
    name: string;
    price: number;
    image: string;
}

/** CartItems */
export interface CartItems {
    productId: string,
    productName: string,
    qty: number,
    price: number,
    image?: string
}

