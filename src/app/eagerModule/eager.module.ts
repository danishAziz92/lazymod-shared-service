import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SharedService } from '../shared/shared.service';
import { EagerComponent } from './eager.component';
import { EagerService } from './eager.service';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule
  ],
  declarations: [EagerComponent],
  exports: [EagerComponent],
  providers: [EagerService],
  // providers:[SharedService], //This step won't matter as the duplicate will be discarded by the root injector
})
export class EagerModule {
  constructor() {
    console.log('Eager Module loaded!!');
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
