import { Component, OnInit, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-register-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-component.html',
  styleUrls: ['./register-component.scss']
})
export class RegisterComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toast = inject(ToastService);

  registerForm!: FormGroup;

  @Output() switchToLogin = new EventEmitter<void>();

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      this.toast.success('Registration successful!');
      this.registerForm.reset();
      this.onGoToLogin(new Event('click'));
    } else {
      this.registerForm.markAllAsTouched();
      this.toast.error('Please fill in all required fields correctly.');
    }
  }

  onGoToLogin(event: Event) {
    event.preventDefault();
    this.switchToLogin.emit();
  }
}