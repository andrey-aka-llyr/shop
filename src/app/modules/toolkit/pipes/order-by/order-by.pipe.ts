import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  private static compare(a: any, b: any): number {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  transform(value: any[], propertyName: string, ascending?: boolean): any {
    if (value && (value.length > 1)) {
      return value.sort((a, b) => {
        return ascending ? OrderByPipe.compare(a[propertyName], b[propertyName]) : OrderByPipe.compare(b[propertyName], a[propertyName]);
      });
    }
    return value;
  }

}
