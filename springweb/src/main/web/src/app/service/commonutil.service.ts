import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonutilService {

  constructor() { }
  getDateInStringForView(date:any):string{
    let d = new Date(date);
    let da = d.getDate() < 10 ? "0" + d.getDate(): d.getDate();
    let m = ( d.getMonth() + 1) < 10 ? "0" + ( d.getMonth() + 1) : ( d.getMonth() + 1);
    let y = d.getFullYear();
    let h = d.getHours() < 10 ? "0" + d.getHours(): d.getHours();
    let mi = d.getMinutes() < 10 ? "0" + d.getMinutes(): d.getMinutes();
    let s = d.getSeconds() < 10 ? "0" + d.getSeconds(): d.getSeconds();
    let temp = da+"/"+ m +"/"+ y + " "+ h +":"+ mi +":"+ s;
    return temp;
  }
  getDateStringToSendBackEnd(date:string):string{
    let d;
    if((date == null)) {
      d = new Date();
    } else{
      d = new Date(date);
    }
    let temp =  d.getFullYear()+"-"+( d.getMonth() + 1) +"-"+d.getDate() + " 00:00:00" ;
    return temp;

  }
  getPlustOneDateStringToSendBackEnd(date:string):string{
    let d = new Date(date);
    d.setDate(d.getDate() + 1);
    let temp =  d.getFullYear()+"-"+( d.getMonth() + 1) +"-"+d.getDate() + " 00:00:00" ;
    return temp;

  }
}
