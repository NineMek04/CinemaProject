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

    ngOnInit(): void {
        this.configService.getConfig().subscribe(data => {
            this.config = data;
        });
    }
}
