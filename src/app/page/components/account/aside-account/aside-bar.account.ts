import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { 
  DxToolbarModule, 
  DxDrawerModule, 
  DxListModule, 
  DxDataGridModule, 
  DxTemplateModule, 
  DxButtonModule 
} from 'devextreme-angular';
import { Users } from '../users/users';
import { dataSource } from '../../../../core/interfaces/dataSourceInfo.interfaces';
import { accountData } from '../../../../data/mock/AccountData/account.data';

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
    Users
  ],
  templateUrl: './aside-bar.account.html',
  styleUrl: './aside-bar.account.scss',
})
export class AsideAccount {
  private router = inject(Router);
  
  isDrawerOpen = signal(true);
  selectedItemId = signal(1);

  // ข้อมูลเมนูด้านซ้าย
  navigationItems = [
    { id: 1, text: 'Profile', path: '/account', icon: 'user' },
    { id: 2, text: 'Security', path: '/security', icon: 'preferences' },
    { id: 3, text: 'Subscription', path: '/subscription', icon: 'card' },
    { id: 4, text: 'Notifications', path: '/notifications', icon: 'bell' },
    { id: 5, text: 'Payment', path: '/checkout', icon: 'money' },
    { id: 6, text: 'Help', path: '/help', icon: 'tips' },
    { id: 7, text: 'Logout', path: '/home', icon: 'runner' }
  ];

  // ข้อมูลตัวอย่างสำหรับ DataGrid
  dataSourceSignal = signal<dataSource[]>(accountData);

  currentUser = signal<dataSource>(this.dataSourceSignal()[0]);

  // ฟังก์ชันเมื่อคลิกเลือกเมนู
  onItemClick(e: any) {
    const selectedItem = e.itemData;
    this.selectedItemId.set(selectedItem.id);
    
    // ดำเนินการนำทางไปยัง Path ที่กำหนด
    if (selectedItem.path) {
      this.router.navigate([selectedItem.path]);
    }
    
    console.log('เปลี่ยนหน้าไปที่:', selectedItem.path);
  }
}
