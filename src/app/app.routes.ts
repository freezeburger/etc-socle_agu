import { Routes } from '@angular/router';
import { refGuard } from './core/guards/ref-guard';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

/**
 * Application routes for the Etnic Users app
 * 
 * @link https://angular.io/guide/router
 */
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'ETNIC: Welcome'
    },
    {
        path: 'recipes',
        loadComponent: () => import('./pages/recipes/recipes.page').then(m => m.RecipesPage),
        title: 'ETNIC: Recipes List'
    },
    {
        path: 'recipes/:id',
        loadComponent: () => import('./pages/recipe-detail/recipe-detail.page').then(m => m.RecipeDetailPage),
        title: 'ETNIC: Recipe Detail',
        loadChildren: () => import('./features/products/routes').then(m => m.routes)
    },
    {
        path: 'products',
        loadComponent: () => import('./pages/products/products').then(m => m.Products),
        title: 'ETNIC: Products List'
    },
    {
        path: 'products/:id',
        // canActivate: [refGuard],
        loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail),
        title: 'ETNIC: Product Detail',
        loadChildren: () => import('./features/products/routes').then(m => m.routes)
    }, {
        path: 'users',
        // component: User
        loadComponent: () => import('./pages/user/user').then(m => m.User),
        title: 'ETNIC: Users List'
    },
    {
        path: 'users/:id',
        loadComponent: () => import('./pages/user-detail/user-detail').then(m => m.UserDetail),
        title: 'ETNIC: User Detail',
        loadChildren: () => import('./features/users/routes').then(m => m.routes)
    },
    {
        path: 'porducts',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFound
    }
];


