import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';  // used for [(ngModel)] two way binding
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPrintModule} from 'ngx-print';
import {MatRadioModule} from '@angular/material'

//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { TransactionhistoryComponent } from './transactionhistory/transactionhistory.component';
import { CreatetransaccompComponent } from './createtransaccomp/createtransaccomp.component';
import { NewInventoryEntryComponent } from './newinventoryentry/newinventoryentry.component';
import {UrlinfoserviceService} from './service/urlinfoservice.service';
import {HttpserviceService} from './service/httpservice.service';
import { ChildcompComponent } from './maincontent/childcomp/childcomp.component';
import { MyCustomPipePipe } from './maincontent/my-custom-pipe.pipe';
import { ItemEntryInventoryComponent } from './item-entry-inventory/item-entry-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    MaincontentComponent,
    PageheaderComponent,
    TransactionhistoryComponent,
    CreatetransaccompComponent,
    NewInventoryEntryComponent,
    ChildcompComponent,
    MyCustomPipePipe,
    ItemEntryInventoryComponent
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
    MatRadioModule,
   // AppRoutingModule
   RouterModule.forRoot([
        {
          path: 'createtransaction',
          component: CreatetransaccompComponent
        },{
          path: 'transactionhistory',
          component: TransactionhistoryComponent
       },{
          path: 'createinventory',
          component: NewInventoryEntryComponent
      },{
        path: 'itementryininventory',
        component: ItemEntryInventoryComponent
      },{
        path: 'learningcomp',
        component: MaincontentComponent
    }])
 ],
  providers: [UrlinfoserviceService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
