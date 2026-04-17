import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Transaction } from '../../../core/interfaces/Transaction.interfaces';

@Component({
  selector: 'app-subscription-settings-component',
  imports: [CommonModule],
  templateUrl: './subscription-settings-component.html',
  styleUrl: './subscription-settings-component.scss',
})
export class SubscriptionSettingsComponent {
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
