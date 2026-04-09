import { Component, OnInit ,EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // นำเข้า Router และ RouterLink
import { ToastService } from '../../../shared/services/toast.service';


@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ], // ใส่ RouterLink ด้วย
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  
  @Output() switchToLogin = new EventEmitter<void>();

  private toast = inject(ToastService); // Inject ToastService มาใช้ใน Component นี้
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      this.toast.success('Registration successful!'); // แสดง Toast แจ้งความสำเร็จ
      // TODO: ส่งข้อมูลไป API แล้วพาสมัครเสร็จ
      this.registerForm.reset();
      this.onGoToLogin(new Event('click')); // เด้งไปหน้า Login เลย
    } else {
      this.registerForm.markAllAsTouched();
      this.toast.error('Please fill in all required fields correctly.'); // แสดง Toast แจ้งความผิดพลาด
    }
  }




  // 🌟 3. สร้างฟังก์ชันกดปุ่มเพื่อส่งสัญญาณ
  onGoToLogin(event: Event) {
    event.preventDefault();
    this.switchToLogin.emit(); // ยิงสัญญาณ!
  }
}