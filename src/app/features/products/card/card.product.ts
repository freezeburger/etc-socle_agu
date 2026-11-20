import { Component, inject, Signal } from '@angular/core';
import { CardUi } from '../../../shared/components/card/card.ui';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { ProductDTO } from '../../../core/types';

@Component({
  imports: [CardUi],
  selector: 'app-card',
  styleUrl: './card.product.scss',
  templateUrl: './card.product.html',
})
export class CardProduct {

  product = inject(ROUTER_OUTLET_DATA) as Signal<ProductDTO>;
  
}
