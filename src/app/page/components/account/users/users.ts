import { Component, effect, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
// import { CommonModule } from '@angular/common';
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
export class Users implements OnChanges{
  // @Input() userName = "Default User"
  // @Input() userClass = ""
  // @Input() userEmail = ""
  @Input() currentUser = <any>({});
  // Personal Information
  fullName = signal('');
  email = signal('');
  phone = signal('+1 (555) 234-5678');
  profileImage = signal('/assets/svg/navbar/avatar-default.svg');

  // Viewing Preferences
  autoplayNext = signal(true);
  highQualityStreaming = signal(true);
  emailNotifications = signal(false);

  // ฟังก์ชันนี้จะถูกเรียกอัตโนมัติทุกครั้งที่ค่า @Input() ถูกตัวแม่เปลี่ยนแปลง
  ngOnChanges(changes: SimpleChanges) {
    // เช็คว่ามีการส่ง currentUser มาใหม่จริงๆ ใช่ไหม
    if (changes['currentUser'] && changes['currentUser'].currentValue) {
      const user = changes['currentUser'].currentValue;
      
      // ดึงค่ามาเซ็ตลงฟอร์ม (จำไว้ว่าข้อมูลชุดนี้ Key เป็นตัวพิมพ์เล็ก name, email)
      this.fullName.set(user.name || '');
      this.email.set(user.email || '');
    }
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
  }

  cancel() {
    console.log('Changes cancelled');
  }

  changePhoto() {
    console.log('Changing photo...');
  }
}
