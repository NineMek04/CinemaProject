import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter , withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    // provideRouter(
    //   routes,
    //   // 🌟 2. ใส่โค้ดนี้เข้าไป เพื่อบังคับให้เลื่อนไปบนสุด (top) เสมอเวลาเปลี่ยนหน้า
    //   withInMemoryScrolling({ 
    //     scrollPositionRestoration: 'disabled',
    //   })
    // )
  ]
};
