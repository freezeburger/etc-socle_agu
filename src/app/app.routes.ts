import { Routes } from '@angular/router';
import { User } from './pages/user/user';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { UserDetail } from './pages/user-detail/user-detail';
import { RecipesPage } from './pages/recipes/recipes.page';
import { RecipeDetailPage } from './pages/recipe-detail/recipe-detail.page';

/**
 * Application routes for the Etnic Users app
 * 
 * @link https://angular.io/guide/router
 */
export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'users',
        component: User
    },
    {
        path: 'recipes',
        component: RecipesPage
    },
    {
        path: 'recipes/:id',
        component: RecipeDetailPage
    },
    {
        path: 'products',
        component: Products
    },
    {
        path: 'products/:id',
        component: ProductDetail
    },
    {
        path: 'users/:id',
        component: UserDetail
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


