import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Transaction } from '../../../core/interfaces/Transaction.interfaces';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-subscription-settings-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-settings-component.html',
  styleUrl: './subscription-settings-component.scss',
})
export class SubscriptionSettingsComponent {
  private accountService = inject(AccountService);
  currentUser = this.accountService.currentUser;

  transactions: Transaction[] = [
    {
      id: '#TXN-988122',
      date: 'Sep 12, 2023',
      description: 'Monthly Premium Subscription',
      amount: '$14.99',
      status: 'PAID'
    },
    {
      id: '#TXN-876155',
      date: 'Aug 12, 2023',
      description: 'Monthly Premium Subscription',
      amount: '$14.99',
      status: 'PAID'
    },
    {
      id: '#TXN-854221',
      date: 'Jul 12, 2023',
      description: 'Monthly Premium Subscription',
      amount: '$14.99',
      status: 'PAID'
    }
  ];
}
