import { Component, OnInit, inject, signal } from '@angular/core';
import { 
  DxButtonModule, 
  DxTextBoxModule, 
  DxTemplateModule 
} from 'devextreme-angular';
import { GlobalConfigService } from '../../../../core/services/global-config.service';
import { GlobalConfig } from '../../../../core/interfaces/global-config.interfaces';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    DxButtonModule,
    DxTextBoxModule,
    DxTemplateModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private configService = inject(GlobalConfigService);

  config = signal<GlobalConfig | undefined>(undefined);

  adminNavItems = [
    { label: 'Overview', icon: 'grid', route: 'overview' },
    { label: 'Movies', icon: 'video', route: 'movies' },
    { label: 'Users', icon: 'group', route: 'users' },
    { label: 'Analytics', icon: 'chart', route: 'analytics' }, // Mock for now
    { label: 'Settings', icon: 'preferences', route: 'settings' }
  ];

  ngOnInit(): void {
    this.loadGlobalConfig();
  }

  loadGlobalConfig(): void {
    this.configService.getConfig().subscribe((data: GlobalConfig) => {
      this.config.set(data);
    });
  }
}
