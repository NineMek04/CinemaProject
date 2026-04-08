import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../auth/login-component/login-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink ,RouterLinkActive , CommonModule, LoginComponent],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {

    showLoginPopup: boolean = false;
}
