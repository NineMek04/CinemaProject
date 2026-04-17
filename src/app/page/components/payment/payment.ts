import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { DxTextBoxModule, DxButtonModule, DxSwitchModule, DxTemplateModule } from 'devextreme-angular';
import { PaymentService } from '../../../core/services/payment.service';
import { CheckoutStep, PaymentMethod, OrderSummary, CheckoutState } from '../../../core/interfaces/payment.interfaces';
import { GlobalConfig } from '../../../core/interfaces/global-config.interfaces';
import { GlobalConfigService } from '../../../core/services/global-config.service';

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
  private configService = inject(GlobalConfigService);
  private router = inject(Router);
  
  config = signal<GlobalConfig | undefined>(undefined);
  steps = signal<CheckoutStep[]>([]);
  paymentMethods = signal<PaymentMethod[]>([]);
  orderSummary = signal<OrderSummary | undefined>(undefined);
  
  currentStepId = signal(2); // Start at Payment step
  selectedMethodId = signal('card');
  promoCode = signal('');
  discount = signal(0);

  selectedMethod = computed(() => {
    return this.paymentMethods().find(m => m.id === this.selectedMethodId());
  });

  finalTotal = computed(() => {
    const summary = this.orderSummary();
    if (!summary) return 0;
    const base = summary.total;
    return base - (base * (this.discount() / 100));
  });

  ngOnInit(): void {
    this.loadCheckoutData();
    this.loadGlobalConfig();
  }

  loadGlobalConfig(): void {
    this.configService.getConfig().subscribe((data) => {
      this.config.set(data);
    });
  }

  loadCheckoutData(): void {
    this.paymentService.getCheckoutState().subscribe((state: CheckoutState) => {
      this.steps.set(state.steps);
      this.paymentMethods.set(state.paymentMethods);
      this.orderSummary.set(state.orderSummary);
    });
  }

  nextStep(): void {
    const current = this.currentStepId();
    if (current < 4) {
      this.currentStepId.set(current + 1);
      this.updateStepsStatus();
    }
  }

  prevStep(): void {
    const current = this.currentStepId();
    if (current > 2) {
      this.currentStepId.set(current - 1);
      this.updateStepsStatus();
    }
  }

  private updateStepsStatus(): void {
    const currentId = this.currentStepId();
    this.steps.update(steps => steps.map(step => ({
      ...step,
      isActive: step.id === currentId,
      isCompleted: step.id < currentId
    })));
  }

  selectMethod(methodId: string): void {
    this.selectedMethodId.set(methodId);
  }

  applyPromo(): void {
    this.paymentService.applyPromoCode(this.promoCode()).subscribe((val: number) => {
      this.discount.set(val);
    });
  }

  goBack(): void {
    if (this.currentStepId() === 2) {
      this.router.navigate(['/account/profile']);
    } else {
      this.prevStep();
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  // Helper for random order number
  range(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
