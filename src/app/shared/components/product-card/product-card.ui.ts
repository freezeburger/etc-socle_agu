import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.ui.scss',
  templateUrl: './product-card.ui.html',
})
export class ProductCardUi {

  id = input<string>('')
}
