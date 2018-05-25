import { ProductCartInfo } from './product-cart-info.model';

export class Cart {
    public products: Array<ProductCartInfo>;

    constructor() {
        this.products = [];
    }

    public get empty(): boolean {
        return !this.products.length;
    }
    public get totalPrice(): number {
        let result = 0;
        this.products.forEach(x => result += x.price * x.count);
        return result;
    }
}
