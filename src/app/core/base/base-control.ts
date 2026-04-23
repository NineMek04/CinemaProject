import { Directive, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { req } from '../http/test-project-team';

/**
 * Base Control สำหรับส่วนประกอบหน้าจอ (Components) ของทีม
 * ช่วยให้เข้าถึง HTTP Wrapper และฟังก์ชันส่วนกลางได้ง่ายขึ้น
 */
@Directive()
export abstract class BaseControl {
  /**
   * Helper สำหรับเรียก API แบบ Fluent (Signal & Standardized)
   * ตัวอย่าง: this.req<MyType>('api/data').get().subscribe(...)
   */
  protected get req() {
    return req;
  }

  /**
   * เข้าถึง HttpClient โดยตรงถ้าจำเป็น
   */
  protected http = inject(HttpClient);

  /**
   * จัดการ Error เบื้องต้นให้ทีม
   */
  protected handleError(err: any) {
    console.error('Team Error Logger:', err);
    // เพิ่มระบบ Notification ส่วนกลางที่นี่ได้ในอนาคต
  }
}
