import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuditItem, Session } from '../../../core/interfaces/security-setting-user.interface';

@Component({
  selector: 'app-security-settings-component',
  imports: [CommonModule],
  templateUrl: './security-settings-component.html',
  styleUrl: './security-settings-component.scss',
})
export class SecuritySettingsComponent {
  sessions: Session[] = [
    {
      device: 'Chrome on macOS Monterey',
      app: '',
      location: 'London, United Kingdom',
      ipOrTime: '192.168.1.1',
      isCurrent: true,
      type: 'desktop'
    },
    {
      device: 'iPhone 15 Pro Max',
      app: 'CineAuteur App',
      location: 'Paris, France',
      ipOrTime: '2 hours ago',
      isCurrent: false,
      type: 'mobile'
    },
    {
      device: 'Apple TV 4K',
      app: '',
      location: 'London, United Kingdom',
      ipOrTime: '3 days ago',
      isCurrent: false,
      type: 'tv'
    }
  ];

  auditItems: AuditItem[] = [
    {
      title: 'Password Strength: High',
      subtitle: 'Last updated 14 days ago',
      status: 'good'
    },
    {
      title: '2FA Enabled',
      subtitle: 'Connected via Google Authenticator',
      status: 'good'
    },
    {
      title: 'No Backup Email',
      subtitle: 'Add one to prevent lockouts',
      status: 'warning'
    }
  ];
}
