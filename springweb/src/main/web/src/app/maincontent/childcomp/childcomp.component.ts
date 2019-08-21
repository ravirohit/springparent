import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  templateUrl: './childcomp.component.html',
  styleUrls: ['./childcomp.component.css']
})
export class ChildcompComponent implements OnInit {

  @Input() parentmsg:string;
  constructor() { }

  ngOnChanges(){
    console.log("ngOnChanges: data from parent comp:"+this.parentmsg);
  }
  ngOnInit() {
    console.log("ngOnInit: data from parent comp:"+this.parentmsg);
  }
  ngDoCheck() {
    console.log('ngDoCheck get called');
  }

}
