import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img',
})
export class ImgPipe implements PipeTransform {
  transform(value: number, extension: string, prefix?: string): string {
    return `/assets/images/${prefix ? prefix + '/' : ''}${
      value < 10 ? '0' + value : value
    }.${extension}`;
  }
}
