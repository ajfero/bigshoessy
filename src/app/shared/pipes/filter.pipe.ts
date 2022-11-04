import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProduct = [];
    for (const product of value) {
      if (product.brand.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultProduct.push(product);
        console.log('product')
      };
    };
    return resultProduct;
  }

}
