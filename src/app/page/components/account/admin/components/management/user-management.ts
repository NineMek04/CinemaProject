import { Component, OnInit, inject, signal } from '@angular/core';
import { 
  DxDataGridModule, 
  DxButtonModule, 
  DxSelectBoxModule,
  DxTemplateModule 
} from 'devextreme-angular';

interface AdminUser {
    id: number;
    name: string;
    email: string;
    avatar: string;
    joinDate: string;
    lastActive: string;
    membership: string;
    status: string;
}

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
  
  users = signal<AdminUser[]>([
    { id: 1, name: 'Julian Voss', email: 'jvoss@cinema-studios.com', avatar: 'https://i.pravatar.cc/150?u=1', joinDate: 'Oct 12, 2023', lastActive: '2 minutes ago', membership: 'ENTERPRISE', status: 'Active' },
    { id: 2, name: 'Elena Rodriguez', email: 'elena.r@global-vfx.io', avatar: 'https://i.pravatar.cc/150?u=2', joinDate: 'Dec 04, 2023', lastActive: '5 hours ago', membership: 'PREMIUM', status: 'Active' },
    { id: 3, name: 'Marcus Thorne', email: 'm.thorne@indie-prod.net', avatar: 'https://i.pravatar.cc/150?u=3', joinDate: 'Jan 15, 2024', lastActive: '3 days ago', membership: 'FREE', status: 'Suspended' },
    { id: 4, name: 'Sarah Jenkins', email: 's.jenkins@media-core.com', avatar: 'https://i.pravatar.cc/150?u=4', joinDate: 'Feb 02, 2024', lastActive: 'Just now', membership: 'PREMIUM', status: 'Active' },
    { id: 5, name: 'Aiden Smith', email: 'aiden@independent.co', avatar: 'https://i.pravatar.cc/150?u=5', joinDate: 'Feb 11, 2024', lastActive: '1 hour ago', membership: 'FREE', status: 'Active' }
  ]);

  userStats = [
    { label: 'TOTAL USERS', value: '128,402', trend: '+12% this month', color: '#fff' },
    { label: 'PREMIUM TIER', value: '42,118', trend: '32% of total', color: '#f28c82' },
    { label: 'ENTERPRISE', value: '1,204', trend: 'Direct accounts', color: '#9C27B0' },
    { label: 'ACTIVE NOW', value: '8,924', trend: 'Live stream metrics', color: '#4CAF50' }
  ];

  ngOnInit(): void {}

  onActionClick(user: AdminUser) {
    console.log('Action for user:', user.name);
  }
}
