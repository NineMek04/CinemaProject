import { Component, OnInit, inject } from '@angular/core';
import { 
  DxDataGridModule, 
  DxButtonModule, 
  DxSelectBoxModule,
  DxTemplateModule 
} from 'devextreme-angular';
import { UserService, AdminUser } from '../../../../../../core/services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    DxDataGridModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTemplateModule
  ],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss'
})
export class UserManagement implements OnInit {
  private userService = inject(UserService);
  
  users = this.userService.users;

  userStats = [
    { label: 'TOTAL USERS', value: '128,402', trend: '+12% this month', color: '#fff' },
    { label: 'PREMIUM TIER', value: '42,118', trend: '32% of total', color: '#f28c82' },
    { label: 'ENTERPRISE', value: '1,204', trend: 'Direct accounts', color: '#9C27B0' },
    { label: 'ACTIVE NOW', value: '8,924', trend: 'Live stream metrics', color: '#4CAF50' }
  ];

  ngOnInit(): void {
    this.userService.getUsers().subscribe();
  }

  onRowUpdating(e: any) {
    this.userService.updateUser(e.key.id, e.newData).subscribe();
  }

  onRowInserting(e: any) {
    this.userService.addUser(e.data).subscribe();
  }

  onRowRemoving(e: any) {
    this.userService.deleteUser(e.key.id).subscribe();
  }

  onActionClick(user: AdminUser) {
    console.log('Action for user:', user.name);
  }
}
