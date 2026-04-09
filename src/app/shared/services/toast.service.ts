import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Toast } from '../interfaces/toast.interface';

@Injectable({
  providedIn: 'root' // สมัครใช้งานแบบ Global
})
export class ToastService {
  // BehaviorSubject เก็บรายการ Toast
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  // Observable ให้ Component อื่นมา Subscribe ฟังข้อมูล
  toasts$: Observable<Toast[]> = this.toastsSubject.asObservable();

  private counter = 0; // ตัวนับสำหรับสร้าง id ยูนิค

  constructor() {}

  // ฟังก์ชันหลักสำหรับแสดง Toast
  show(toast: Omit<Toast, 'id'>) {
    const id = ++this.counter;
    const newToast: Toast = { ...toast, id };
    const currentToasts = this.toastsSubject.value;

    // เพิ่ม Toast ใหม่เข้าไปในรายการ
    this.toastsSubject.next([...currentToasts, newToast]);

    // ตั้งเวลาปิดอัตโนมัติ
    const duration = toast.duration || 4000; // ค่าเริ่มต้น 4 วินาที
    setTimeout(() => {
      this.remove(id);
    }, duration);
  }

  // ฟังก์ชันสะดวกสำหรับสถานะต่างๆ
  success(message: string, duration?: number) {
    this.show({ type: 'success', message, duration });
  }

  error(message: string, duration?: number) {
    this.show({ type: 'error', message, duration });
  }

  warning(message: string, duration?: number) {
    this.show({ type: 'warning', message, duration });
  }

  // ฟังก์ชันลบ Toast ออกจากรายการ (กดปิดเอง หรือหมดเวลา)
  remove(id: number) {
    const currentToasts = this.toastsSubject.value;
    const updatedToasts = currentToasts.filter(t => t.id !== id);
    this.toastsSubject.next(updatedToasts);
  }
}