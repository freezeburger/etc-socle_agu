import { Routes } from '@angular/router';
// import { User } from './pages/user/user';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
//import { Products } from './pages/products/products';
//import { ProductDetail } from './pages/product-detail/product-detail';
//import { UserDetail } from './pages/user-detail/user-detail';
//import { RecipesPage } from './pages/recipes/recipes.page';
//import { RecipeDetailPage } from './pages/recipe-detail/recipe-detail.page';

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
        path: 'users',
        // component: User
        loadComponent: () => import('./pages/user/user').then(m => m.User),
        title: 'ETNIC: Users List'
    },
    {
        path: 'recipes',
        // component: RecipesPage
        loadComponent: () => import('./pages/recipes/recipes.page').then(m => m.RecipesPage),
        title: 'ETNIC: Recipes List'
    },
    {
        path: 'recipes/:id',
        // component: RecipeDetailPage
        loadComponent: () => import('./pages/recipe-detail/recipe-detail.page').then(m => m.RecipeDetailPage),
        title: 'ETNIC: Recipe Detail'
    },
    {
        path: 'products',
        // component: Products
        loadComponent: () => import('./pages/products/products').then(m => m.Products),
        title: 'ETNIC: Products List'
    },
    {
        path: 'products/:id',
        // component: ProductDetail
        loadComponent: () => import('./pages/product-detail/product-detail').then(m => m.ProductDetail),
        title: 'ETNIC: Product Detail'
    },
    {
        path: 'users/:id',
        // component: UserDetail
        loadComponent: () => import('./pages/user-detail/user-detail').then(m => m.UserDetail),
        title: 'ETNIC: User Detail'
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


