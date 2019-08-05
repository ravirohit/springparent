import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';  // used for [(ngModel)] two way binding

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { AdmincompComponent } from './admincomp/admincomp.component';
import { CreatetransaccompComponent } from './createtransaccomp/createtransaccomp.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    MaincontentComponent,
    PageheaderComponent,
    AdmincompComponent,
    CreatetransaccompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
   // AppRoutingModule
   RouterModule.forRoot([
         {
          path: 'admin',
          component: AdmincompComponent
       },
       {
        path: 'createtransaction',
        component: CreatetransaccompComponent
     }
    ])
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
