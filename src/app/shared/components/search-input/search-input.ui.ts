import { Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-search-input',
  styleUrl: './search-input.ui.scss',
  templateUrl: './search-input.ui.html',
})
export class SearchInputUi {
  text = model('');
}
