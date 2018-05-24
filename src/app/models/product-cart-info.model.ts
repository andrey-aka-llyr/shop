import { Product } from '.';

export class ProductCartInfo {
    public id: number;
    public name: string;
    public price: number;

    constructor(
        product: Product,
        public count?: number
    ) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.count = (count !== undefined) ? count : 1;
    }
}
