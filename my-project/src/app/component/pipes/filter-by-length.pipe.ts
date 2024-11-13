import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByLength',
  standalone: true
})
export class FilterByLengthPipe implements PipeTransform {
  transform(value: string[], minLength:number): string[] {
    return value.filter(value=>value.length>=minLength);
  }
}
