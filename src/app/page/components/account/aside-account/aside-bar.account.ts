import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {
  DxToolbarModule,
  DxDrawerModule,
  DxListModule,
  DxDataGridModule,
  DxTemplateModule,
  DxButtonModule
} from 'devextreme-angular';
import { AccountService } from '../../../../core/services/account.service';

@Component({
  selector: 'app-aside-account',
  standalone: true,
  imports: [
    DxToolbarModule,
    DxDrawerModule,
    DxListModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    RouterOutlet
  ],
  templateUrl: './aside-bar.account.html',
  styleUrl: './aside-bar.account.scss',
})
export class AsideAccount {
  private router = inject(Router);
  private accountService = inject(AccountService);

  isDrawerOpen = signal(true);
  selectedItemId = signal(1);

  // Use shared signal from service
  currentUser = this.accountService.currentUser;

  // ข้อมูลเมนูด้านซ้าย
  navigationItems = [
    { id: 1, text: 'Profile', path: 'profile', icon: 'user' },
    { id: 2, text: 'Security', path: 'security', icon: 'preferences' },
    { id: 3, text: 'Subscription', path: 'subscription', icon: 'card' },
    { id: 4, text: 'Notifications', path: 'notifications', icon: 'bell' },
    { id: 5, text: 'Payment', path: 'checkout', icon: 'money' },
    { id: 6, text: 'Help', path: 'help', icon: 'tips' },
    { id: 7, text: 'Logout', path: '/home', icon: 'runner' }
  ];

  // ฟังก์ชันเมื่อคลิกเลือกเมนู
  onItemClick(e: any) {
    const selectedItem = e.itemData;
    this.selectedItemId.set(selectedItem.id);

    // ดำเนินการนำทาง
    if (selectedItem.path.startsWith('/')) {
      this.router.navigate([selectedItem.path]);
    } else {
      this.router.navigate(['account', selectedItem.path]);
    }

    console.log('เปลี่ยนหน้าไปที่:', selectedItem.path);
  }
}
