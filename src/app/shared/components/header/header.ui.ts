import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.ui.scss',
  templateUrl: './header.ui.html',
})
export class HeaderUi {}
