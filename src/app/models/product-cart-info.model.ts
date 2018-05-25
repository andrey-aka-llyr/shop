import { Product } from './product.model';

export class ProductCartInfo {
    public id: number;
    public name: string;
    public price: number;
    public total: number;

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

    public get notAvailable(): boolean {
        return this.count >= this.total;
    }
}
