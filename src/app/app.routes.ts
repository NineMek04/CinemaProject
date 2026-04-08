import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home-component/home-component';
import { AsideAccount } from './page/components/account/aside-account/tebber-account';
import { Admin } from './page/components/account/admin/admin';
import { Payment } from './page/components/payment/payment';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tebber-account',
        component: AsideAccount
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'checkout',
        component: Payment
    }
];
