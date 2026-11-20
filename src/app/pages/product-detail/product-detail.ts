import { Component, inject, input } from '@angular/core';
import { ProductApi } from '../../core/services/product.api';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ButtonUi } from '../../shared/components/button/button.ui';

@Component({
  imports: [RouterOutlet, ButtonUi, RouterLink],
  selector: 'app-product-detail',
  styleUrl: './product-detail.scss',
  templateUrl: './product-detail.html',
})
export class ProductDetail {

  id = input<string>('');

  productApi = inject(ProductApi);

  ngOnInit() {
    this.productApi.loadProduct(Number(this.id()));
  }

}
