import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUi } from './shared/components/header/header.ui';
import { NotificationUi } from './shared/components/notification/notification.ui';

@Component({
  imports: [RouterOutlet, HeaderUi, NotificationUi],
  selector: 'etnic-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

}
