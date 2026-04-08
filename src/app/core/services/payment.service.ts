import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckoutState } from '../interfaces/payment.interfaces';
import { CHECKOUT_MOCK_DATA } from '../../data/mock/PaymentData/payment.data';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  getCheckoutState(): Observable<CheckoutState> {
    return of(CHECKOUT_MOCK_DATA);
  }

  // Simulate applying a promo code
  applyPromoCode(code: string): Observable<number> {
    // For demo, any code gives 10% discount
    if (code && code.length > 0) {
      return of(10); 
    }
    return of(0);
  }
}
