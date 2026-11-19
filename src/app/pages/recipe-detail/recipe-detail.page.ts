import { Component, inject, input } from '@angular/core';
import { RecipeApi } from '../../core/services/recipe.api';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-recipe-detail',
  styleUrl: './recipe-detail.page.scss',
  templateUrl: './recipe-detail.page.html',
})
export class RecipeDetailPage {

  id = input<string>('');

  recipeApi = inject(RecipeApi);

  ngOnInit() {
    this.recipeApi.loadRecipe(Number(this.id()));
  }
}
