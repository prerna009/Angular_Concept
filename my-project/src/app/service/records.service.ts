import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  info1:string[]=["Prerna","E123","pre123@gmail.com"];

  info2:string[]=["Sumeet","E345","sumeet@gmail.com"];

  info3:string[]=["Sandhaya","E897","sandy@gmail.com"];

  getInfo1():string[]{
    return this.info1;
  }

  getInfo2():string[]{
    return this.info2;
  }

  getInfo3():string[]{
    return this.info3;
  }
}
