import { Component, inject, input } from '@angular/core';
import { ProductApi } from '../../core/services/product.api';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
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
