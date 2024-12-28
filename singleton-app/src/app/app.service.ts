import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class AppService {
  private _randomNo='';

  constructor() { 
    console.log('AppService constructed');
    this._randomNo='App'+Math.floor(Math.random()*1000+1);
  }

  get RandomNo(){
    return this._randomNo;
  }
}
