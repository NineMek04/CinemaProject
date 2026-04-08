import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // นำเข้า Router และ RouterLink

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ใส่ RouterLink ด้วย
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      console.log('✅ Login Data:', this.loginForm.value);
      // TODO: ส่งข้อมูลไป API
      // สมมติว่า Login สำเร็จ ให้เด้งไปหน้าแรก
      // this.router.navigate(['/home']); 
    } else {
      this.loginForm.markAllAsTouched();
      console.error('❌ Login Form is invalid');
    }
  }
}