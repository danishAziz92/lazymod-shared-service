import { Injectable } from '@angular/core';
import { CustomersModule } from './customers.module';

@Injectable({ providedIn: CustomersModule })
export class CustomerService {
  constructor() {
    console.log('Constructed: customer service');
  }
}
