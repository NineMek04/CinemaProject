import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../auth/login-component/login-component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../../auth/register-component/register-component';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink ,RouterLinkActive , CommonModule, LoginComponent , RegisterComponent],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {

    showLoginPopup: boolean = false;
    authMode: 'login' | 'register' = 'login';

    openPopup(mode: 'login' | 'register' = 'login') {
    this.authMode = mode;
    this.showLoginPopup = true;
  }
}
