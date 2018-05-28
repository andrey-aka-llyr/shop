import { ProductCartInfo } from './product-cart-info.model';

export class Cart {
    products: Array<ProductCartInfo>;

    constructor() {
        this.products = [];
    }

    get empty(): boolean {
        return !this.products.length;
    }
}
