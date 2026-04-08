import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    DxTextBoxModule,
    DxButtonModule,
    DxSwitchModule,
    DxFileUploaderModule
  ],
  templateUrl: './users.html',
  styleUrl: './users.scss',
})
export class Users {
  // Personal Information
  fullName = signal('Alex Thorne');
  email = signal('alex.thorne@aura-cinema.com');
  phone = signal('+1 (555) 234-5678');
  profileImage = signal('avatar.png');

  // Viewing Preferences
  autoplayNext = signal(true);
  highQualityStreaming = signal(true);
  emailNotifications = signal(false);

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
  }

  cancel() {
    console.log('Changes cancelled');
  }

  changePhoto() {
    console.log('Changing photo...');
  }
}
