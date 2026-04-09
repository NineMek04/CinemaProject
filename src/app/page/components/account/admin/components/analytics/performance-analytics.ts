import { Component, OnInit, signal } from '@angular/core';
import { 
  DxChartModule, 
  DxPieChartModule,
  DxButtonModule,
  DxDateBoxModule,
  DxTemplateModule 
} from 'devextreme-angular';

interface AnalyticsKPI {
    label: string;
    value: string;
    trend: string;
    trendType: 'positive' | 'negative';
    icon: string;
}

@Component({
  selector: 'app-performance-analytics',
  standalone: true,
  imports: [
    DxChartModule,
    DxPieChartModule,
    DxButtonModule,
    DxDateBoxModule,
    DxTemplateModule
  ],
  templateUrl: './performance-analytics.html',
  styleUrl: './performance-analytics.scss'
})
export class PerformanceAnalytics implements OnInit {
  
  kpis = signal<AnalyticsKPI[]>([
    { label: 'RETENTION RATE', value: '84.2%', trend: '+2.4% vs last period', trendType: 'positive', icon: '../../../assets/svg/dashboar.admin.icon/RetentionRate.Icon.svg' },
    { label: 'AVG WATCH TIME', value: '42.5m', trend: '+8.1% vs last period', trendType: 'positive', icon: '../../../assets/svg/dashboar.admin.icon/AvgWatchTime.Icon.svg' },
    { label: 'PEAK CONCURRENT USERS', value: '1.2M', trend: '-1.2% vs last period', trendType: 'negative', icon: '../../../assets/svg/dashboar.admin.icon/PeakConcurrentUser.Icon.svg' }
  ]);

  viewershipTrends = [
    { month: 'OCT 01', series: 1.2, movies: 0.8 },
    { month: 'OCT 20', series: 1.5, movies: 1.1 },
    { month: 'NOV 10', series: 1.3, movies: 1.4 },
    { month: 'NOV 30', series: 1.8, movies: 1.2 },
    { month: 'DEC 15', series: 4.2, movies: 2.1 },
    { month: 'DEC 31', series: 3.8, movies: 1.9 }
  ];

  deviceReach = [
    { platform: 'Smart TV / Console', val: 55 },
    { platform: 'Mobile (iOS/Android)', val: 30 },
    { platform: 'Web Desktop', val: 15 }
  ];

  regionalData = [
    { region: 'North America', subs: 2.4 },
    { region: 'Western Europe', subs: 1.8 },
    { region: 'East Asia', subs: 2.1 },
    { region: 'Latin America', subs: 0.9 },
    { region: 'Oceania', subs: 0.5 }
  ];

  ngOnInit(): void {}

  customizeTooltip(arg: any) {
    return {
      text: `${arg.argumentText}: ${arg.valueText}M`
    };
  }

  customizeLabel(arg: any) {
    return `${arg.valueText}%`;
  }
}
