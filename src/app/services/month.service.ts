import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  readonly months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  currentMonth(): string{
    const d = new Date();
    let index =0;
    try{
      index = d && 'getMonth' in d? d.getMonth():0;
    }catch(e){
      console.error(e);
    }
    return this.months[index];
  
  }

  nextMonth(): string{
    const d = new Date();
    let index = d.getMonth()+1;
    if(index > 11){
      index = 0;
    }
    return this.months[index];
  }


  constructor() { }
}
