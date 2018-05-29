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
  transform(value: ProductCategory): any {
    const mapItem = nameMap.find(x => x.category === value);
    return mapItem ? mapItem.description : value;
  }

}
