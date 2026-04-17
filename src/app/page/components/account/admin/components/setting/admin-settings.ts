import { Component, OnInit, inject, signal } from '@angular/core';
import {
  DxTextBoxModule,
  DxButtonModule,
  DxSwitchModule,
  DxTemplateModule
} from 'devextreme-angular';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [
    DxTextBoxModule,
    DxButtonModule,
    DxSwitchModule,
    DxTemplateModule
  ],
  templateUrl: './admin-settings.html',
  styleUrl: './admin-settings.scss'
})
export class AdminSettings implements OnInit {

  platformName = signal('Cinematic Editorial Pro');
  platformTimezone = signal('UTC (Coordinated Universal Time)');
  supportEmail = signal('ops@cinematic-editorial.com');

  isTranscodingActive = signal(true);

  ngOnInit(): void { }

  onCommit() {
    console.log('Committing configuration...');
  }
}
