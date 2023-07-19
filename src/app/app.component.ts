import { Component } from '@angular/core';
import { SharedService } from './shared/shared.service';
import { OrderService } from './orders/order.service';
import { CustomerService } from './customers/customer.service';
import { EagerService } from './eagerModule/eager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lazy loading feature modules';
  constructor(
    private shared: SharedService, //This is also set as forRoot, so same logic as below
    private order: OrderService, // It is also instantiated in a order comp, but will not create a new duplicate instance of the service, as it is using providedin: root and is part of the root injector context. So dupliacte will be removed
    private eager: EagerService, // It is also instantiated in eager comp, but will not create a new duplicate instance of the service, as it is being provided in the providers array in the app.module which is the root module. So dupliacte will be removed
    //We can import the 3 service and directly use them without providing them explicitly in the app.module because:
    //shared service: This is using forRoot in it's module, and the service is provided in the module and the module is imported in app.module. So service is registered in the root injector context
    //OrderService: Service is using providedIn: root. So service is registered in the root injector context
    //EagerService: Service is provided in it's module and the module is imported in the app.module. So service is registered in the root injector context
    private customer: CustomerService // This will instantiate the customer service constructor. My guess is because it is being provided in the providers array of the app.module. So it is registering it in it's injector context. And when app.comp is using it in it's contructor, it is initializing the customer service. For other servies I didn't need to provide it in app.module as they got registered due to above reasons. If this service is tried to be accessed without being provided in the app.module, it gives error
  ) //Note:: When the customer lazy module actually gets loaded and a component in it tries to initialize the customer service, customer service gets initialized again. That makes 2 instances of the same service. All the other service have 1 instance only
  {
    this.shared.sayHello('app component');
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
