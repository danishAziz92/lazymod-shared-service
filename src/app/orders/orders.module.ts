import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderTestComponent } from './order-test/order-test.component';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared/shared.service';
// import { OrderService } from './order.service'

@NgModule({
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
  declarations: [OrderListComponent, OrderTestComponent],
  // providers:[OrderService] This is not required because the order service is provided to the root. So even if we do it, the duplicate instance will be ignored and tree shaked
})
export class OrdersModule {
  constructor() {
    console.log('Orders Module loaded!!');
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
