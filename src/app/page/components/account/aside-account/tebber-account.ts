import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // เพิ่ม CommonModule สำหรับคำสั่งพื้นฐาน เช่น NgIf, NgFor และ Property Binding
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
  selector: 'app-tebber-account',
  standalone: true,
  imports: [
    CommonModule, 
    DxToolbarModule,
    DxDrawerModule,
    DxListModule,
    DxDataGridModule,
    DxTemplateModule,
    DxButtonModule,
    Users
  ],
  templateUrl: './tebber-account.html',
  styleUrl: './tebber-account.scss',
})
export class AsideAccount {
  private router = inject(Router);
  isDrawerOpen = true;
  selectedItemId: number = 1;

  // ฟังก์ชันย้อนกลับไปยังหน้าหลัก
  // goBack() {
  //   this.router.navigate(['/']);
  // }

  // ข้อมูลเมนูด้านซ้าย
  navigationItems = [
    { id: 1, text: 'Profile', path: '/Profile', icon: 'user' },
    { id: 2, text: 'Security', path: '/Security', icon: 'preferences' },
    { id: 3, text: 'Subscription', path: '/Subscription', icon: 'card' },
    { id: 4, text: 'Notifications', path: '/Notification', icon: 'bell' },
    { id: 5, text: 'Payment', path: '/Payment', icon: 'money' },
    { id: 6, text: 'Logout', path: '/Logout', icon: 'runner' }
  ];

  // ข้อมูลตัวอย่างสำหรับ DataGrid
  dataSource : dataSource[] = accountData;

  currentUser = this.dataSource[0];

  // ฟังก์ชันสลับเปิด/ปิดลิ้นชัก
  // toggleDrawer() {
  //   this.isDrawerOpen = !this.isDrawerOpen;
  // }

  // ฟังก์ชันเมื่อคลิกเลือกเมนู
  onItemClick(e: any) {
    const selectedItem = e.itemData;
    this.selectedItemId = selectedItem.id;
    console.log('เปลี่ยนหน้าไปที่:', selectedItem.path);
  }
}
