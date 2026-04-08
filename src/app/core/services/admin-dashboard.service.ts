import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminDashboardData } from '../interfaces/admin-dashboard.interfaces';
import { ADMIN_DASHBOARD_MOCK_DATA } from '../../data/mock/AdminData/admin-dashboard.data';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor() { }

  /**
   * Fetches the complete dashboard data.
   * In the future, replace 'of()' with 'this.http.get<AdminDashboardData>(url)'
   */
  getDashboardData(): Observable<AdminDashboardData> {
    return of(ADMIN_DASHBOARD_MOCK_DATA);
  }

  // Individual getters for more granular access
  getStats() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.stats);
  }

  getEngagementData() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.engagementData);
  }

  getSystemHealth() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.systemHealth);
  }

  getRecentUploads() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.recentUploads);
  }
}
