import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home-component/home-component';
import { AsideAccount } from './page/components/account/aside-account/tebber-account';
import { MovieComponent } from './page/components/movie-component/movie-component';
import { MylistComponent } from './page/components/mylist-component/mylist-component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'tebber-account',
        component: AsideAccount
    },
    {path: 'movies', component: MovieComponent},
    {path: 'mylist', component: MylistComponent},
    { path: '**', redirectTo: 'home' }
];
