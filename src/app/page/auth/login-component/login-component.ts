import { Component, OnInit, Output , EventEmitter, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router,  } from '@angular/router'; // นำเข้า Router และ RouterLink
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,], // ใส่ RouterLink ด้วย
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;



  @Output() closeModal = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>(); // สร้าง EventEmitter สำหรับส่งสัญญาณไปยังพ่อแม่

  private toast = inject(ToastService); // Inject ToastService มาใช้ใน Component นี้
  constructor(private fb: FormBuilder, private router: Router) {} // Inject Router


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      this.toast.success('Login successful!'); // แสดง Toast แจ้งความสำเร็จ
      this.closeModal.emit(); // ปิด Popup

    } else {
      this.loginForm.markAllAsTouched();
      this.toast.error('Please fill in all required fields correctly.'); // แสดง Toast แจ้งความผิดพลาด
    }
  }




  // 🌟 3. สร้างฟังก์ชันกดปุ่มเพื่อส่งสัญญาณ
  onGoToRegister(event: Event) {
    event.preventDefault(); // กันเว็บกระตุก
    this.switchToRegister.emit(); // ยิงสัญญาณ!
  }
}