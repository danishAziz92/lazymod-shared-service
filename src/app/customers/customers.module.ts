import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
// import { SharedService } from '../shared/shared.service';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [CommonModule, CustomersRoutingModule, SharedModule],
  declarations: [CustomerListComponent],
  providers: [CustomerService], //Create a customer service and provide it here and not root. Try accessing it in the eagerly loaded app module. We should be getting error because it will not be created at application start.
})
export class CustomersModule {
  constructor() {
    console.log('Customer Module loaded');
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
