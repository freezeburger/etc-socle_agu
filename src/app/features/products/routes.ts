import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./card/card.product').then(m => m.CardProduct)
    },
    {
        path: 'edit',
        loadComponent: () => import('./form/form.product').then(m => m.FormProduct)
    }
];

