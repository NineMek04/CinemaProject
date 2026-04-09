export interface Toast {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number; // ระยะเวลาแสดง (ms) ถ้าไม่ใส่จะมีค่าเริ่มต้น
}