import { Injectable, signal, inject } from '@angular/core';
import { dataSource } from '../interfaces/dataSourceInfo.interfaces';
import { accountData } from '../../data/mock/AccountData/account.data';
import { environment } from '../../../environments/environment';
import { catchError, of, tap } from 'rxjs';
import { req } from '../http/test-project-team';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
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

    req<dataSource>(`${this.apiUrl}/profile`).get().pipe(
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
      req(`${this.apiUrl}/profile`).body(updatedData).put().pipe(
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
