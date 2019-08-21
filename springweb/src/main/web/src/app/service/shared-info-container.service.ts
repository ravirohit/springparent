import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedInfoContainerService {

  sharedInfo:Object[]=[];
  private subject = new Subject<any>();
  constructor() { }
  
  putData(data:Object){
    this.sharedInfo.push(data);
  }
  getData(){
    return this.sharedInfo;
  }
  sendMessage(msg:string){
    this.subject.next({message:msg});
  }
  getMessage():Observable<any>{
    return this.subject.asObservable();
  }

}
