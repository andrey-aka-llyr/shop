import { ProductCategory } from './product-category.enum';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public count?: number,
        public category?: ProductCategory
    ) {
        this.category = category || ProductCategory.Undefined;
        this.count = (count !== undefined) ? count : 0;
    }
}
