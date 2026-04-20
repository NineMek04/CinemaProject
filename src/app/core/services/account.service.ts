import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataSource } from '../interfaces/dataSourceInfo.interfaces';
import { accountData } from '../../data/mock/AccountData/account.data';
import { environment } from '../../../environments/environment';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/account`;

  // Shared signal for the current logged-in user
  currentUser = signal<dataSource>(accountData[0]);

  /**
   * Fetches the user profile from the server or falls back to mock.
   */
  loadUserProfile() {
    if (environment.useMockData) {
      return; // Initialized with accountData[0]
    }

    this.http.get<dataSource>(`${this.apiUrl}/profile`).pipe(
      tap(user => this.currentUser.set(user)),
      catchError(error => {
        console.warn('AccountService: Failed to fetch profile, using mock.', error);
        return of(accountData[0]);
      })
    ).subscribe();
  }

  // Method to update user data app-wide
  updateUser(updatedData: Partial<dataSource>) {
    // Optimistic UI update
    this.currentUser.update(user => ({
      ...user,
      ...updatedData
    }));

    if (!environment.useMockData) {
      this.http.patch(`${this.apiUrl}/profile`, updatedData).pipe(
        catchError(error => {
          console.error('AccountService: Update failed', error);
          return of(null);
        })
      ).subscribe();
    }
  }

  constructor() {
    this.loadUserProfile();
  }
}
