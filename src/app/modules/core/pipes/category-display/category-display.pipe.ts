import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../../../../models';

class CategoryDescription {
  constructor(
    public category: ProductCategory,
    public description: string
  ) {
  }
}
const nameMap = [
  new CategoryDescription(ProductCategory.Clothes, 'Wear'),
  new CategoryDescription(ProductCategory.Food, 'Meal'),
  new CategoryDescription(ProductCategory.Games, 'Gaming'),
  new CategoryDescription(ProductCategory.Undefined, 'None')
];

@Pipe({
  name: 'categoryDisplay'
})
export class CategoryDisplayPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const category = value as ProductCategory;
    if (category !== undefined) {
      const mapItem = nameMap.find(x => x.category === category);
      if (mapItem) {
        return mapItem.description;
      }
    }
    return value;
  }

}
