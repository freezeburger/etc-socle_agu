import { Service, signal, inject } from '@angular/core';
import { RecipeDTO, RECIPE_ENDPOINT, RecipeResponse } from '../types';
import { NotificationService } from './notification.service';
@Service()
export class RecipeApi {

    notificationService = inject(NotificationService);
    recipes = signal<RecipeDTO[]>([]);
    currentRecipe = signal<RecipeDTO | null>(null);

    async load() {
        if (this.recipes().length > 0) return;

        const response = await fetch(RECIPE_ENDPOINT);
        const data: RecipeResponse = await response.json();
        this.recipes.set(data);

         this.notificationService.notify('Update', 'Recipes loaded successfully' , 'success');
    }

    async loadRecipe(id: number) {

        if ( this.currentRecipe()?.id === id) return;

        const recipe = this.recipes().find(r => r.id === id);
        
        this.notificationService.notify('Selection', 'You selected a recipe', 'info');

        if (recipe) {
            this.currentRecipe.set(recipe);
            return;
        }

        const response = await fetch(RECIPE_ENDPOINT + '/' + id);
        const data: RecipeDTO = await response.json();
        this.currentRecipe.set(data);

        
    }


}
