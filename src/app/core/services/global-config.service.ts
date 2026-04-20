import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, tap } from 'rxjs';
import { GlobalConfig } from '../interfaces/global-config.interfaces';
import { GLOBAL_APP_CONFIG } from '../../data/mock/GlobalConfig/global-config.data';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/config`;

  private _config = signal<GlobalConfig>(GLOBAL_APP_CONFIG);
  config = this._config.asReadonly();

  /**
   * Returns the global application configuration.
   * Hybrid Logic: Checks environment flag first. If false, attempts API call with mock fallback.
   */
  getConfig(): Observable<GlobalConfig> {
    if (environment.useMockData) {
      return of(this._config());
    }

    return this.http.get<GlobalConfig>(this.apiUrl).pipe(
      tap(data => this._config.set(data)),
      catchError(error => {
        console.warn('GlobalConfigService: API failed, falling back to mock data.', error);
        return of(this._config());
      })
    );
  }

  updateConfig(updates: Partial<GlobalConfig>): Observable<GlobalConfig> {
    if (environment.useMockData) {
      this._config.update(c => ({ ...c, ...updates }));
      return of(this._config());
    }

    return this.http.patch<GlobalConfig>(this.apiUrl, updates).pipe(
      tap(updated => this._config.set(updated)),
      catchError(error => { throw error; })
    );
  }

  constructor() {
    this.getConfig().subscribe();
  }
}
