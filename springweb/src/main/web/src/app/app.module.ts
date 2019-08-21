import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';  // used for [(ngModel)] two way binding
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPrintModule} from 'ngx-print';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { TransactionhistoryComponent } from './admincomp/transactionhistory.component';
import { CreatetransaccompComponent } from './createtransaccomp/createtransaccomp.component';
import { NewitementryComponent } from './newitementry/newitementry.component';
import {UrlinfoserviceService} from './service/urlinfoservice.service';
import {HttpserviceService} from './service/httpservice.service';
import { ChildcompComponent } from './maincontent/childcomp/childcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    MaincontentComponent,
    PageheaderComponent,
    TransactionhistoryComponent,
    CreatetransaccompComponent,
    NewitementryComponent,
    ChildcompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxPrintModule,
   // AppRoutingModule
   RouterModule.forRoot([
        {
          path: 'createtransaction',
          component: CreatetransaccompComponent
        },{
          path: 'transactionhistory',
          component: TransactionhistoryComponent
       },{
          path: 'itementry',
          component: NewitementryComponent
      },{
        path: 'learningcomp',
        component: MaincontentComponent
    }])
 ],
  providers: [UrlinfoserviceService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
