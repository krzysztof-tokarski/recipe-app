import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformToUpperCase'
})
export class TransformToUpperCasePipe implements PipeTransform {

  transform(string: string) {
    return string.toUpperCase();
  }

}
