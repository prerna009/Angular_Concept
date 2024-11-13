import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characters',
  standalone: true
})
export class CharactersPipe implements PipeTransform {

  transform(value: string,maxLength:number=20): string{
    if(value && value.length>maxLength){
      return value.substring(0,maxLength)+'...';
    }
    return value;
  }

}
