import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // นำเข้า Router และ RouterLink

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink], // ใส่ RouterLink ด้วย
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

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
      console.log('✅ Register Data:', this.registerForm.value);
      // TODO: ส่งข้อมูลไป API แล้วพาสมัครเสร็จ
      // this.router.navigate(['/auth/login']); 
    } else {
      this.registerForm.markAllAsTouched();
      console.error('❌ Register Form is invalid');
    }
  }
}