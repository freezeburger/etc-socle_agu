import { Component, inject } from '@angular/core';
import { RecipeApi } from '../../core/services/recipe.api';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-recipes',
  styleUrl: './recipes.page.scss',
  templateUrl: './recipes.page.html',
})
export class RecipesPage {

  recipeApi = inject(RecipeApi);

  ngOnInit() {
    this.recipeApi.load();
  }
}
