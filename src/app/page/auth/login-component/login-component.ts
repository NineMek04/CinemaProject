import { Component, OnInit, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';
import { BaseControl } from '../../../core/base/base-control';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent extends BaseControl implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private toast = inject(ToastService);

  loginForm!: FormGroup;

  @Output() closeModal = new EventEmitter<void>();
  @Output() switchToRegister = new EventEmitter<void>();

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      this.toast.success('Login successful!');
      this.closeModal.emit();
    } else {
      this.loginForm.markAllAsTouched();
      this.toast.error('Please fill in all required fields correctly.');
    }
  }

  onGoToRegister(event: Event) {
    event.preventDefault();
    this.switchToRegister.emit();
  }
}