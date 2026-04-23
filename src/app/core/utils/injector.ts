import { Injector } from '@angular/core';

/**
 * Helper สำหรับเข้าถึง Injector ได้จากทุกที่ในโค้ด
 */
export class AppInjector {
  private static injector: Injector;

  static set(injector: Injector) {
    this.injector = injector;
  }

  static get<T>(token: any): T {
    if (!this.injector) {
      throw new Error('AppInjector: Injector has not been set. Call AppInjector.set(injector) in your main.ts or AppComponent.');
    }
    return this.injector.get(token);
  }
}
