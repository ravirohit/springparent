import { Component, OnInit } from '@angular/core';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {

  lastClickedLink: string = null;
  sidebar='todo navigation design';
  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService){}

  ngOnInit() {
    
  }
  callBackOnApi(items,  isPostApiCall) {
    console.log("logout api called sucessfully");
  }
  onNavBarClick(ele){
    if(this.lastClickedLink != null){
      document.getElementById(this.lastClickedLink).style.backgroundColor = "#001d38";
    }
    this.lastClickedLink = ele.toElement.id;
    document.getElementById(this.lastClickedLink).style.backgroundColor = "lightslategray";
  }


}

