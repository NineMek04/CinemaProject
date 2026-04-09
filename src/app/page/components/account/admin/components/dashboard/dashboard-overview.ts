import { Component, OnInit, inject, signal } from '@angular/core';
import { 
  DxChartModule, 
  DxDataGridModule, 
  DxButtonModule, 
  DxProgressBarModule, 
  DxTemplateModule 
} from 'devextreme-angular';
import { AdminDashboardService } from '../../../../../../core/services/admin-dashboard.service';
import { 
  StatCard, 
  EngagementPoint, 
  SystemHealthMetric, 
  MovieUpload 
} from '../../../../../../core/interfaces/admin-dashboard.interfaces';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [
    DxChartModule,
    DxDataGridModule,
    DxButtonModule,
    DxProgressBarModule,
    DxTemplateModule
  ],
  templateUrl: './dashboard-overview.html',
  styleUrl: './dashboard-overview.scss'
})
export class DashboardOverview implements OnInit {
  private dashboardService = inject(AdminDashboardService);

  stats = signal<StatCard[]>([]);
  engagementData = signal<EngagementPoint[]>([]);
  systemHealth = signal<SystemHealthMetric[]>([]);
  recentUploads = signal<MovieUpload[]>([]);

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe((data: any) => {
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
