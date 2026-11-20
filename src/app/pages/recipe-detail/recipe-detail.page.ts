import { Component, inject, input } from '@angular/core';
import { RecipeApi } from '../../core/services/recipe.api';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ButtonUi } from '../../shared/components/button/button.ui';

@Component({
  imports: [RouterOutlet, ButtonUi, RouterLink],
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
