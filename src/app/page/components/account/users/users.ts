import { Component, computed, input, signal, effect } from '@angular/core';
import { 
  DxTextBoxModule, 
  DxButtonModule, 
  DxSwitchModule, 
  DxFileUploaderModule 
} from 'devextreme-angular';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    DxTextBoxModule,
    DxButtonModule,
    DxSwitchModule,
    DxFileUploaderModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  // Modern Signal Input
  currentUser = input<any>({});
  
  // Personal Information Signals
  fullName = signal('');
  email = signal('');
  phone = signal('');
  profileImage = signal('/assets/svg/navbar/avatar-default.svg');

  // Viewing Preferences Signals
  autoplayNext = signal(true);
  highQualityStreaming = signal(true);
  emailNotifications = signal(false);

  constructor() {
    // Effect to sync model when input changes
    effect(() => {
      const user = this.currentUser();
      if (user) {
        this.fullName.set(user.name || '');
        this.email.set(user.email || '');
        this.phone.set(user.phone || '');
        // Keep existing preferences or reset
      }
    }, { allowSignalWrites: true });
  }
  
  // Actions
  saveChanges() {
    console.log('Saving changes...', {
      name: this.fullName(),
      email: this.email(),
      phone: this.phone(),
      autoplay: this.autoplayNext(),
      streaming: this.highQualityStreaming(),
      notifications: this.emailNotifications()
    });
    // In a real app, emit an event or call a service
  }

  cancel() {
    // Reset to current input values
    const user = this.currentUser();
    this.fullName.set(user.name || '');
    this.email.set(user.email || '');
    this.phone.set(user.phone || '');
    console.log('Changes cancelled');
  }

  changePhoto() {
    console.log('Changing photo...');
  }
}
