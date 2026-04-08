import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    DxChartModule,
    DxDataGridModule,
    DxButtonModule,
    DxTextBoxModule,
    DxProgressBarModule,
    DxTemplateModule
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private dashboardService = inject(AdminDashboardService);

  // Statistics Data
  stats: StatCard[] = [];

  // Chart Data
  engagementData: EngagementPoint[] = [];

  // System Health
  systemHealth: SystemHealthMetric[] = [];

  // Recent Uploads
  recentUploads: MovieUpload[] = [];

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.stats = data.stats;
      this.engagementData = data.engagementData;
      this.systemHealth = data.systemHealth;
      this.recentUploads = data.recentUploads;
    });
  }

  customizeTooltip(arg: any) {
    return {
      text: `${arg.argumentText}: ${arg.valueText}%`
    };
  }
}
