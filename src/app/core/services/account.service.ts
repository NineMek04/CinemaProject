import { Injectable, signal } from '@angular/core';
import { dataSource } from '../interfaces/dataSourceInfo.interfaces';
import { accountData } from '../../data/mock/AccountData/account.data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Shared signal for the current logged-in user
  currentUser = signal<dataSource>(accountData[0]);

  // Method to update user data app-wide
  updateUser(updatedData: Partial<dataSource>) {
    this.currentUser.update(user => ({
      ...user,
      ...updatedData
    }));
  }

  constructor() {}
}
