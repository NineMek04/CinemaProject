import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConfig } from '../interfaces/global-config.interfaces';
import { GLOBAL_APP_CONFIG } from '../../data/mock/GlobalConfig/global-config.data';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {

  /**
   * Returns the global application configuration.
   * Currently pulls directly from local mock files.
   * Ready to be swapped with HttpClient.get() in the future.
   */
  getConfig(): Observable<GlobalConfig> {
    return of(GLOBAL_APP_CONFIG);
  }
}
