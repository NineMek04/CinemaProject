import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../../../auth/login-component/login-component';
import { RegisterComponent } from '../../../auth/register-component/register-component';
import { GlobalConfigService } from '../../../../core/services/global-config.service';
import { GlobalConfig } from '../../../../core/interfaces/global-config.interfaces';

@Component({
  selector: 'app-navbar-component',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginComponent, RegisterComponent],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent implements OnInit {
    private configService = inject(GlobalConfigService);

    isMobileMenuOpen: boolean = false;
  isMobileSearchOpen: boolean = false;
    
    config = signal<GlobalConfig | undefined>(undefined);
    showLoginPopup = signal(false);
    authMode = signal<'login' | 'register'>('login');

    openPopup(mode: 'login' | 'register' = 'login') {
      this.authMode.set(mode);
      this.showLoginPopup.set(true);
    }

    closePopup() {
      this.showLoginPopup.set(false);
    }

    ngOnInit(): void {
        this.configService.getConfig().subscribe(data => {
            this.config.set(data);
        });
    }



    toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // ถ้าเปิดเมนูอยู่ ให้ปิดช่องค้นหา
    if (this.isMobileMenuOpen) this.isMobileSearchOpen = false; 
  }

  // ฟังก์ชันสำหรับเปิด/ปิดช่องค้นหา
  toggleMobileSearch() {
    this.isMobileSearchOpen = !this.isMobileSearchOpen;
    // ถ้าเปิดช่องค้นหาอยู่ ให้ปิดเมนู
    if (this.isMobileSearchOpen) this.isMobileMenuOpen = false;
  }
}
