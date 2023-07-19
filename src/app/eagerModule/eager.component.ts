import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { EagerService } from './eager.service';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
})
export class EagerComponent implements OnInit {
  constructor(private shared: SharedService, private eager: EagerService) {
    this.shared.sayHello('from eager');
  }

  ngOnInit() {}
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
