import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification-settings-component',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './notification-settings-component.html',
  styleUrl: './notification-settings-component.scss',
})
export class NotificationSettingsComponent {

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
