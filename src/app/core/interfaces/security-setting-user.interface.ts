export interface Session {
  device: string;
  app: string;
  location: string;
  ipOrTime: string;
  isCurrent: boolean;
  type: 'desktop' | 'mobile' | 'tv';
}

export interface AuditItem {
  title: string;
  subtitle: string;
  status: 'good' | 'warning';
}