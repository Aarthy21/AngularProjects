import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private msg:MessageService) { 
    this.msg.userName.subscribe(uname=>{
      this.userName=uname;
      console.log("USERNAME======>"+this.userName)
    })
  }
message:string;
userName:string="Aarthy"
ngOnInit(){
  this.msg.currentMessage.subscribe(message => this.message =
    message);
}

UpdateVal(uname){
  
  this.msg.userName.next(uname.value);
}

  // receiveMsg($event){
  //   this.message=$event;
  //   console.log("message=>"+this.message);
  // }
}