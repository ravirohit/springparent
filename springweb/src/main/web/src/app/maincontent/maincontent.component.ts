import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {SharedInfoContainerService} from '../service/shared-info-container.service';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  name:string;
  receivedMsg:string;
  sharedData:Object[]=[];
  learningTopics:string[]=['SubscribeEvent','Pipe'];
  topicSelected:string;

  constructor(private sharedInfo:SharedInfoContainerService) { 
    console.log("content page constructor get called");
  }

  ngOnInit() {
    console.log("content page ngOnInit get called");
  }
  ngOnChanges(){
    console.log("content page ngOnChanges get called");
  }
  ngOnDestroy(){
    console.log("content page ngOnDestroy get called");
  }

  onClick(){
    console.log("name entered in the input field");
    //this.sharedData = this.sharedInfo.getData();  // get the data which is updated by different component whith old content tool
    this.sharedInfo.sendMessage(this.name);
    console.log("message sent");
  }
  subscribeForNewMsg(){
    this.sharedInfo.getMessage().subscribe(msg => {
        this.receivedMsg = msg.message;
    });
  }

}
