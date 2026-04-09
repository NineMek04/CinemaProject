import { Component, OnInit, inject, signal } from '@angular/core';
import { 
  DxChartModule, 
  DxDataGridModule, 
  DxButtonModule, 
  DxTextBoxModule, 
  DxProgressBarModule, 
  DxTemplateModule 
} from 'devextreme-angular';
import { AdminDashboardService } from '../../../../core/services/admin-dashboard.service';
import { 
  StatCard, 
  EngagementPoint, 
  SystemHealthMetric, 
  MovieUpload 
} from '../../../../core/interfaces/admin-dashboard.interfaces';
import { GlobalConfigService } from '../../../../core/services/global-config.service';
import { GlobalConfig } from '../../../../core/interfaces/global-config.interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    DxChartModule,
    DxDataGridModule,
    DxButtonModule,
    DxTextBoxModule,
    DxProgressBarModule,
    DxTemplateModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private dashboardService = inject(AdminDashboardService);
  private configService = inject(GlobalConfigService);

  config = signal<GlobalConfig | undefined>(undefined);

  // Statistics Data
  stats = signal<StatCard[]>([]);

  // Chart Data
  engagementData = signal<EngagementPoint[]>([]);

  // System Health
  systemHealth = signal<SystemHealthMetric[]>([]);

  // Recent Uploads
  recentUploads = signal<MovieUpload[]>([]);

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadGlobalConfig();
  }

  loadGlobalConfig(): void {
    this.configService.getConfig().subscribe((data: GlobalConfig) => {
      this.config.set(data);
    });
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.stats.set(data.stats);
      this.engagementData.set(data.engagementData);
      this.systemHealth.set(data.systemHealth);
      this.recentUploads.set(data.recentUploads);
    });
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.argumentText}: ${arg.valueText}%`
    };
  }
}
