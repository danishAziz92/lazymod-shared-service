import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EagerModule } from './eagerModule/eager.module';
// import { OrdersModule } from './orders/orders.module'; Note required to provide in the array as this service is provided in root
import { SharedService } from './shared/shared.service';
import { CustomerService } from './customers/customer.service';
import { EagerService } from './eagerModule/eager.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    EagerModule,
  ],
  providers: [CustomerService], //No need to provide the used service in app.comp, as their modules are imported or the service is using providedIn: root. So the services are being registered in the root injector context
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
