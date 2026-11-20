import { Component, effect, inject, linkedSignal } from '@angular/core';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  imports: [],
  selector: 'app-notification',
  styleUrl: './notification.ui.scss',
  templateUrl: './notification.ui.html',
  host: {
    '(click)': 'linkedNotification.set(null)',
    '[class.active]': 'linkedNotification() !== null'
  }
})
export class NotificationUi {

  notificationService = inject(NotificationService);

  linkedNotification = linkedSignal( () => this.notificationService.lastNotification() );


  fx = effect(() => {
    if(this.notificationService.lastNotification())
        setTimeout(() => this.linkedNotification.set(null), 2000)
  });

}
