import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
message:string="welcome";
userName:string="Aarthy";
  constructor(private msg:MessageService) {
    this.msg.userName.subscribe(uname=>{
      this.userName=uname;
      console.log("USERNAME======>"+this.userName)
    })
   }
  // @Output() MessageEvent=new EventEmitter<string>();
  ngOnInit() {
    this.msg.currentMessage.subscribe(message=>this.message=message);
  }
  SendMsg(){
     this.msg.ChangeMsg("Welcome To Initial")   
  }
  UpdateVal(uname){
  
    this.msg.userName.next(uname.value);
  }
}
