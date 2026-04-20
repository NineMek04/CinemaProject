import { Component, OnInit, inject, signal, effect } from '@angular/core';
import {
  DxTextBoxModule,
  DxButtonModule,
  DxSwitchModule,
  DxTemplateModule
} from 'devextreme-angular';
import { GlobalConfigService } from '../../../../../../core/services/global-config.service';

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
  private configService = inject(GlobalConfigService);

  platformName = signal('');
  supportEmail = signal('');
  isTranscodingActive = signal(true);

  constructor() {
    effect(() => {
      const config = this.configService.config();
      if (config) {
        this.platformName.set(config.brand?.name || '');
        this.supportEmail.set(config.currentUser?.email || ''); // Assuming email is in config
      }
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void { }

  onCommit() {
    this.configService.updateConfig({
      brand: {
        ...this.configService.config().brand,
        name: this.platformName()
      }
    }).subscribe(() => {
      console.log('Configuration committed successfully');
    });
  }
}
