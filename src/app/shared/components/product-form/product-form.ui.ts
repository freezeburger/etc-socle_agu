import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-form',
  styleUrl: './product-form.ui.scss',
  templateUrl: './product-form.ui.html',
})
export class ProductFormUi {
  id = input<string>('')
}
