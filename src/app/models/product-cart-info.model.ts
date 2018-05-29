import { Product } from './product.model';

export class ProductCartInfo {
    id: number;
    name: string;
    price: number;
    total: number;

    constructor(
        product: Product,
        public count?: number
    ) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.total = product.count;
        this.count = (count !== undefined) ? count : 0;
    }

    get notAvailable(): boolean {
        return this.count >= this.total;
    }
    get totalPrice(): number {
        return this.price * this.count;
    }
}
