import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home-component/home-component';
import { AsideAccount } from './page/components/account/aside-account/tebber-account';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tebber-account',
        component: AsideAccount
    }
];
