import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../core/services/account.service';

@Component({
  selector: 'app-notification-settings-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './notification-settings-component.html',
  styleUrl: './notification-settings-component.scss',
})
export class NotificationSettingsComponent {
  private accountService = inject(AccountService);
  currentUser = this.accountService.currentUser;

  settings = {
    email: {
      newReleases: true,
      recommendations: true,
      accountUpdates: true
    },
    push: {
      continueWatching: false,
      livePremiere: true
    }
  };

  savePreferences() {
    console.log('Preferences saved:', this.settings);
  }

  discardChanges() {
    console.log('Changes discarded');
  }
}
