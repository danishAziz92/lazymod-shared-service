import { Injectable } from '@angular/core';
import {  SharedModule } from './shared.module'

@Injectable(
  // {providedIn:"root"}
)
export class SharedService {
    constructor() {
      console.log('Constructed: SharedService');
    }
    sayHello(from){
      console.log('Hello from: ' + from);
    }
}
