
import { computed, Service, signal } from '@angular/core';
import { Notification } from '../types';

let ID = 0;

@Service()
export class NotificationService {
    
    notifications = signal<Notification[]>([]);

    lastNotification = computed(() => {
        const current = this.notifications();
        return current.length ? current[current.length - 1] : null;
    });

    public notify(title: string, message: string, level: Notification['level'] = 'info') {
        const notification: Notification = {
            id: ++ID,
            createdAt: Date.now(),
            title,
            message,
            level
        };

        this.notifications.update((current) => [...current, notification]);
        //this.notifications.set([...this.notifications(), notification]);
    }
}
