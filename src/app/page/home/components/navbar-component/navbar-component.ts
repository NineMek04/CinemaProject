import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../auth/login-component/login-component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../../auth/register-component/register-component';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterLink ,RouterLinkActive , CommonModule, LoginComponent , RegisterComponent],
import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../auth/login-component/login-component';
import { CommonModule } from '@angular/common';
import { GlobalConfigService } from '../../../../core/services/global-config.service';
import { GlobalConfig } from '../../../../core/interfaces/global-config.interfaces';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, LoginComponent],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent implements OnInit {
    private configService = inject(GlobalConfigService);
    
    config?: GlobalConfig;
    showLoginPopup: boolean = false;
    authMode: 'login' | 'register' = 'login';

    openPopup(mode: 'login' | 'register' = 'login') {
    this.authMode = mode;
    this.showLoginPopup = true;
  }

    ngOnInit(): void {
        this.configService.getConfig().subscribe(data => {
            this.config = data;
        });
    }
}
