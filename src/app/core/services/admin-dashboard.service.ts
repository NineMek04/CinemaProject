import { Injectable, inject } from '@angular/core';
import { Observable, of, map, switchMap, forkJoin } from 'rxjs';
import { AdminDashboardData, MovieUpload } from '../interfaces/admin-dashboard.interfaces';
import { ADMIN_DASHBOARD_MOCK_DATA } from '../../data/mock/AdminData/admin-dashboard.data';
import { MovieService } from './movie.service';
import { Movie } from '../interfaces/movie.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {
  private movieService = inject(MovieService);

  /**
   * Fetches the complete dashboard data, merging static stats with synchronized movie data.
   */
  getDashboardData(): Observable<AdminDashboardData> {
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

  getStats() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.stats);
  }

  getEngagementData() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.engagementData);
  }

  getSystemHealth() {
    return of(ADMIN_DASHBOARD_MOCK_DATA.systemHealth);
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
}
