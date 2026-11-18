import { Component, inject } from '@angular/core';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  imports: [],
  selector: 'app-notification',
  styleUrl: './notification.ui.scss',
  templateUrl: './notification.ui.html',
})
export class NotificationUi {

  notificationService = inject(NotificationService);
}
