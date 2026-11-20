import { Component, inject } from '@angular/core';
import { CardUi } from '../../../shared/components/card/card.ui';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { ButtonUi } from '../../../shared/components/button/button.ui';

@Component({
  imports: [CardUi, ButtonUi],
  selector: 'app-card',
  styleUrl: './card.product.scss',
  templateUrl: './card.product.html',
})
export class CardProduct {

  data = inject(ROUTER_OUTLET_DATA) as any;
  
}
