import { Injectable, inject } from '@angular/core';
import { Observable, of, map, catchError } from 'rxjs';
import { AdminDashboardData, MovieUpload } from '../interfaces/admin-dashboard.interfaces';
import { ADMIN_DASHBOARD_MOCK_DATA } from '../../data/mock/AdminData/admin-dashboard.data';
import { MovieService } from './movie.service';
import { environment } from '../../../environments/environment';
import { req } from '../http/test-project-team';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private movieService = inject(MovieService);
  private apiUrl = `${environment.apiUrl}/admin/dashboard`;

  /**
   * Fetches the complete dashboard data.
   * Hybrid Logic: Attempts API call if useMockData is false, otherwise returns consolidated mock.
   */
  getDashboardData(): Observable<AdminDashboardData> {
    if (environment.useMockData) {
      return this.getConsolidatedMockData();
    }

    return req<AdminDashboardData>(this.apiUrl).get().pipe(
      catchError(error => {
        console.warn('AdminDashboardService: API failed, falling back to mock data.', error);
        return this.getConsolidatedMockData();
      })
    );
  }

  getStats() {
    if (environment.useMockData) {
      return of(ADMIN_DASHBOARD_MOCK_DATA.stats);
    }
    return req<any>(`${this.apiUrl}/stats`).get().pipe(
      catchError(() => of(ADMIN_DASHBOARD_MOCK_DATA.stats))
    );
  }

  getEngagementData() {
    if (environment.useMockData) {
      return of(ADMIN_DASHBOARD_MOCK_DATA.engagementData);
    }
    return req<any>(`${this.apiUrl}/engagement`).get().pipe(
      catchError(() => of(ADMIN_DASHBOARD_MOCK_DATA.engagementData))
    );
  }

  getSystemHealth() {
    if (environment.useMockData) {
      return of(ADMIN_DASHBOARD_MOCK_DATA.systemHealth);
    }
    return req<any>(`${this.apiUrl}/health`).get().pipe(
      catchError(() => of(ADMIN_DASHBOARD_MOCK_DATA.systemHealth))
    );
  }

  getRecentUploads(): Observable<MovieUpload[]> {
    return this.movieService.getRecentUploads().pipe(
      map(movies => movies.map(m => ({
        title: m.title,
        genre: m.genre,
        date: m.uploadedDate,
        status: m.status,
        views: m.views,
        image: m.posterPath
      })))
    );
  }

  private getConsolidatedMockData(): Observable<AdminDashboardData> {
    return this.movieService.getRecentUploads().pipe(
      map(movies => {
        const mappedMovies: MovieUpload[] = movies.map(m => ({
          title: m.title,
          genre: m.genre,
          date: m.uploadedDate,
          status: m.status,
          views: m.views,
          image: m.posterPath
        }));

        return {
          ...ADMIN_DASHBOARD_MOCK_DATA,
          recentUploads: mappedMovies
        };
      })
    );
  }
}
