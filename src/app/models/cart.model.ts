import { ProductCartInfo } from '.';

export class Cart {
    public cart: Array<ProductCartInfo>;

    constructor() {
        this.cart = [];
    }

    public get empty(): boolean {
        return !this.cart.length;
    }
    public get totalPrice(): number {
        let result = 0;
        this.cart.forEach(x => result += x.price * x.count);
        return result;
    }
}
