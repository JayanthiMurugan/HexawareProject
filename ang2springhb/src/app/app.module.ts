import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutes} from './app.routes'
import {RouterModule,Routes} from '@angular/router';
import {Ng2PaginationModule} from 'ng2-pagination'; // <-- import the module

import {AppComponent } from './app.component';
import {ListComponent} from './app.component.list';
import {AddComponent} from './app.component.add';
import {ProductService} from './app.service.products';
import {Configuration} from './app.services.configration';
import {SharedValue} from './app.service.SharedValue'
 
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes,
    Ng2PaginationModule
  ],
  providers: [ProductService,Configuration,SharedValue],
  bootstrap: [AppComponent]
})
export class AppModule { }
