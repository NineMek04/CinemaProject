import { AdminDashboardData } from "../../../core/interfaces/admin-dashboard.interfaces";

export const ADMIN_DASHBOARD_MOCK_DATA: AdminDashboardData = {
    stats: [
        { title: 'TOTAL USERS', value: '142,890', trend: '+12.5%', icon: 'group', color: '#FF8A80' },
        { title: 'MONTHLY REVENUE', value: '$842.2k', trend: '+8.2%', icon: 'money', color: '#4CAF50' },
        { title: 'ACTIVE STREAMERS', value: '12,402', trend: 'Live Not', icon: 'video', color: '#9C27B0' },
        { title: 'MOVIE LIBRARY', value: '4,289', trend: 'Global Archive', icon: 'card', color: '#2196F3' }
    ],
    engagementData: [
        { month: 'JAN', value: 25 }, { month: 'FEB', value: 20 }, { month: 'MAR', value: 30 },
        { month: 'APR', value: 28 }, { month: 'MAY', value: 45 }, { month: 'JUN', value: 35 },
        { month: 'JUL', value: 50 }, { month: 'AUG', value: 40 }, { month: 'SEP', value: 60 },
        { month: 'OCT', value: 55 }, { month: 'NOV', value: 85 }, { month: 'DEC', value: 70 }
    ],
    systemHealth: [
        { label: 'Server Load (Node-Alpha)', value: 42, color: '#FF8A80' },
        { label: 'CDN Traffic Distribution', value: 78, color: '#FF8A80' },
        { label: 'Database Latency', value: 14, color: '#9b51e0' }
    ],
    recentUploads: [
        { 
            title: 'The Midnight Echo', 
            genre: 'Drama / Noir', 
            date: 'Oct 24, 2023', 
            status: 'PUBLISHED', 
            views: '12,402',
            image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Echo'
        },
        { 
            title: 'Beyond the Horizon', 
            genre: 'Sci-Fi / Epic', 
            date: 'Oct 22, 2023', 
            status: 'DRAFT', 
            views: '0',
            image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Horizon'
        },
        { 
            title: 'Velvet Reverie', 
            genre: 'Romance / Classic', 
            date: 'Oct 20, 2023', 
            status: 'PUBLISHED', 
            views: '45,891',
            image: 'https://via.placeholder.com/150/000000/FFFFFF?text=Reverie'
        }
    ]
};
