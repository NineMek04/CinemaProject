import { Component, OnInit, inject, signal, computed } from '@angular/core';
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

  steps = signal<CheckoutStep[]>([]);
  paymentMethods = signal<PaymentMethod[]>([]);
  orderSummary = signal<OrderSummary | undefined>(undefined);
  
  selectedMethodId = signal('card');
  promoCode = signal('');
  discount = signal(0);

  finalTotal = computed(() => {
    const summary = this.orderSummary();
    if (!summary) return 0;
    const base = summary.total;
    return base - (base * (this.discount() / 100));
  });

  ngOnInit(): void {
    this.loadCheckoutData();
  }

  loadCheckoutData(): void {
    this.paymentService.getCheckoutState().subscribe((state: CheckoutState) => {
      this.steps.set(state.steps);
      this.paymentMethods.set(state.paymentMethods);
      this.orderSummary.set(state.orderSummary);
    });
  }

  selectMethod(methodId: string): void {
    this.selectedMethodId.set(methodId);
  }

  applyPromo(): void {
    this.paymentService.applyPromoCode(this.promoCode()).subscribe((val: number) => {
      this.discount.set(val);
      // In a real app, you'd recalculate totals here
    });
  }
}
