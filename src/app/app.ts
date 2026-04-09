import { Component, inject, OnInit, signal ,PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './page/home/components/navbar-component/navbar-component';
import { ToastComponent } from './shared/components/toast-component/toast-component';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent , ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('Cinema');


  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

 ngOnInit() {
  
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      
      if (isPlatformBrowser(this.platformId)) {
        // โค้ดข้างในนี้จะทำงานก็ต่อเมื่ออยู่บนเว็บบราวเซอร์เท่านั้น (Server จะข้ามไปเลย)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    });
  }
}
