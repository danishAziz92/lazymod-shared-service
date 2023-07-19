import { Injectable } from '@angular/core';

@Injectable()
export class EagerService {
  constructor() {
    console.log('Constructed: eager service');
  }
}
