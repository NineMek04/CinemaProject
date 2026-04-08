import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DxTextBoxModule, 
  DxButtonModule, 
  DxSwitchModule, 
  DxTemplateModule 
} from 'devextreme-angular';
import { PaymentService } from '../../../core/services/payment.service';
import { 
  CheckoutStep, 
  PaymentMethod, 
  OrderSummary,
  CheckoutState
} from '../../../core/interfaces/payment.interfaces';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    DxTextBoxModule,
    DxButtonModule,
    DxSwitchModule,
    DxTemplateModule
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.scss',
})
export class Payment implements OnInit {
  private paymentService = inject(PaymentService);

  steps: CheckoutStep[] = [];
  paymentMethods: PaymentMethod[] = [];
  orderSummary?: OrderSummary;
  
  selectedMethodId: string = 'card';
  promoCode: string = '';
  discount: number = 0;

  ngOnInit(): void {
    this.loadCheckoutData();
  }

  loadCheckoutData(): void {
    this.paymentService.getCheckoutState().subscribe((state: CheckoutState) => {
      this.steps = state.steps;
      this.paymentMethods = state.paymentMethods;
      this.orderSummary = state.orderSummary;
    });
  }

  selectMethod(methodId: string): void {
    this.selectedMethodId = methodId;
  }

  applyPromo(): void {
    this.paymentService.applyPromoCode(this.promoCode).subscribe((discount: number) => {
      this.discount = discount;
      // In a real app, you'd recalculate totals here
    });
  }

  get finalTotal(): number {
    if (!this.orderSummary) return 0;
    const base = this.orderSummary.total;
    return base - (base * (this.discount / 100));
  }
}
