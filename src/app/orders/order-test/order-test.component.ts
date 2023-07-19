import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { OrderService } from '../order.service'

@Component({
  selector: 'app-order-test',
  templateUrl: './order-test.component.html',
})
export class OrderTestComponent implements OnInit {

  constructor(private shared: SharedService, private order: OrderService) {
    
  }

  ngOnInit() {
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/