import { Injectable } from '@angular/core';

@Injectable()
export class EagerService {
  private _randomNo='';

  constructor() { 
    console.log('EagerService constructed');
    this._randomNo='App'+Math.floor(Math.random()*1000+1);
  }

  get RandomNo(){
    return this._randomNo;
  }
}
