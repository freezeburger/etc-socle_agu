import { Component, input } from '@angular/core';

export type ButtonLevel = 'primary' | 'secondary' | 'danger';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.ui.scss',
  templateUrl: './button.ui.html',
})
export class ButtonUi {
  level = input<ButtonLevel>('primary');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
}
