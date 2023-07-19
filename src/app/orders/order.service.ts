import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' } //This is why this service is accessible in the app.component even without the orders lazy module loading at app start
)
export class OrderService {
  constructor() {
    console.log('Constructed: OrderService');
  }
  sayHello(from) {
    console.log('Hello from: ' + from);
  }
}
