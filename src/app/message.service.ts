import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private messageSource=new BehaviorSubject<string>("default message");
currentMessage=this.messageSource.asObservable();

userName=new Subject<any>();

  constructor() { }
  ChangeMsg(message:string){
  this.messageSource.next(message);
  console.log("msgsource===>"+this.messageSource);
  }
}
