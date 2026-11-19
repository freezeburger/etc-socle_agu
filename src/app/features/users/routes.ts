import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./card/card.user').then(m => m.CardUser)
    },
    {
        path: 'edit',
        loadComponent: () => import('./form/form.user').then(m => m.FormUser)
    }
];

