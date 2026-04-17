import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home-component/home-component';
import { AsideAccount } from './page/components/account/aside-account/aside-bar.account';
import { Admin } from './page/components/account/admin/admin';
import { Payment } from './page/components/payment/payment';
import { MovieComponent } from './page/components/movie-component/movie-component';
import { MylistComponent } from './page/components/mylist-component/mylist-component';
import { RegisterComponent } from './page/auth/register-component/register-component';
import { LoginComponent } from './page/auth/login-component/login-component';
import { MovieDetailsComponent } from './page/home/components/movie-details-component/movie-details-component';

// Admin Sub-components
import { DashboardOverview } from './page/components/account/admin/components/dashboard/dashboard-overview';
import { MovieLibrary } from './page/components/account/admin/components/library/movie-library';
import { UserManagement } from './page/components/account/admin/components/management/user-management';
import { AdminSettings } from './page/components/account/admin/components/setting/admin-settings';
import { PerformanceAnalytics } from './page/components/account/admin/components/analytics/performance-analytics';
import { SubscriptionSettingsComponent } from './page/components/subscription-settings-component/subscription-settings-component';
import { SecuritySettingsComponent } from './page/components/security-settings-component/security-settings-component';
import { NotificationSettingsComponent } from './page/components/notification-settings-component/notification-settings-component';
import { HelpCenterComponent } from './page/components/help-center-component/help-center-component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'account',
        component: AsideAccount
    },
    {
        path: 'admin',
        component: Admin,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: DashboardOverview },
            { path: 'movies', component: MovieLibrary },
            { path: 'users', component: UserManagement },
            { path: 'analytics', component: PerformanceAnalytics },
            { path: 'settings', component: AdminSettings }
        ]
    },
    {
        path: 'checkout',
        component: Payment
    },
    {path: 'subscription', component: SubscriptionSettingsComponent},
    {path: 'security', component: SecuritySettingsComponent},
    {path: 'notifications', component: NotificationSettingsComponent},
    {path: 'help', component: HelpCenterComponent},
    {path: 'movies', component: MovieComponent},
    {path: 'mylist', component: MylistComponent},

    { path: 'movie/:slug', component: MovieDetailsComponent },

    { path: '**', redirectTo: 'home' }
];
