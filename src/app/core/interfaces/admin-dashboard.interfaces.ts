export interface StatCard {
    title: string;
    value: string;
    trend: string;
    icon: string;
    color: string;
}

export interface EngagementPoint {
    month: string;
    value: number;
}

export interface SystemHealthMetric {
    label: string;
    value: number;
    color: string;
}

export interface MovieUpload {
    title: string;
    genre: string;
    date: string;
    status: 'PUBLISHED' | 'DRAFT' | 'PENDING';
    views: string;
    image: string;
}

export interface AdminDashboardData {
    stats: StatCard[];
    engagementData: EngagementPoint[];
    systemHealth: SystemHealthMetric[];
    recentUploads: MovieUpload[];
}
