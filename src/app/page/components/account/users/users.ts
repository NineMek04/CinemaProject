import { Component, inject, signal, effect } from '@angular/core';
import { 
  DxTextBoxModule, 
  DxButtonModule, 
  DxSwitchModule, 
  DxFileUploaderModule 
} from 'devextreme-angular';
import { AccountService } from '../../../../core/services/account.service';

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
  private accountService = inject(AccountService);
  
  // Use shared signal from service
  currentUser = this.accountService.currentUser;
  
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
    // Effect to sync model when service data changes
    effect(() => {
      const user = this.currentUser();
      if (user) {
        this.fullName.set(user.name || '');
        this.email.set(user.email || '');
        this.phone.set(user.phone || '');
      }
    }, { allowSignalWrites: true });
  }

  // Actions
  saveChanges() {
    this.accountService.updateUser({
      name: this.fullName(),
      email: this.email(),
      phone: this.phone()
    });
    console.log('Changes saved via service');
  }

  cancel() {
    // Reset to current service values
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
