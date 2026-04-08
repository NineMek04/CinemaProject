import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home-component/home-component';
import { TebberAccount } from './page/account/tebber-account/tebber-account';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'tebber-account',
        component: TebberAccount
    }
];
