import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./card/card.recipe').then(m => m.CardRecipe)
    },
    {
        path: 'edit',
        loadComponent: () => import('./form/form.recipe').then(m => m.FormRecipe)
    }
];

