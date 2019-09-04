import { Component, OnInit } from '@angular/core';
import {UrlinfoserviceService} from '../service/urlinfoservice.service';
import {HttpserviceService} from '../service/httpservice.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.css']
})
export class PageheaderComponent implements OnInit {

  constructor(private urlinfoservice: UrlinfoserviceService, private httpservice: HttpserviceService){}

  ngOnInit() {
  }
  logout(){
    this.httpservice.getApiCall(this.urlinfoservice.CUSTOMER_LOGOUT_URL,this);
  }

}
