import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Toast } from '../../interfaces/toast.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast-component',
  imports: [CommonModule],
  templateUrl: './toast-component.html',
  styleUrl: './toast-component.scss',
})
export class ToastComponent implements OnInit {
  // Subscribe ฟังรายการ Toast จาก Service
  toasts$: Observable<Toast[]>;

  constructor(private toastService: ToastService) {
    this.toasts$ = this.toastService.toasts$;
  }

  ngOnInit(): void {}

  // ฟังก์ชันปิด Toast เมื่อกดปุ่ม (X)
  close(id: number) {
    this.toastService.remove(id);
  }

  // ฟังก์ชันเลือกไอคอนตามประเภท (วาด SVG ตรงๆ ใน TS เลยครับ)
  getIconSvg(type: string): string {
    switch (type) {
      case 'success':
        return `<svg class="w-6 h-6 text-[#1eff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
      case 'error':
        return `<svg class="w-6 h-6 text-[#ff0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
      default:
        return `<svg class="w-6 h-6 text-[#ffa200]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
    }
  }
}
