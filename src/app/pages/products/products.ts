import { Component, inject } from '@angular/core';
import { ProductApi } from '../../core/services/product.api';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  styleUrl: './products.scss',
  templateUrl: './products.html',
})
export class Products {

  productApi = inject(ProductApi);

  ngOnInit() {
    this.productApi.load();
  }

}
