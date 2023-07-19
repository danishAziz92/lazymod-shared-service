import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(
    private shared: SharedService,
    private customerService: CustomerService
  ) {
    this.shared.sayHello('customer component');
  }

  ngOnInit() {}
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
