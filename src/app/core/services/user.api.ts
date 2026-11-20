import { Injectable, signal, inject } from '@angular/core';
import { USER_ENDPOINT, UserDTO, UserResponse } from '../types';
import { NotificationService } from './notification.service';

// @Service()
@Injectable({ providedIn: 'root' })
export class UserApi {

    notificationService = inject(NotificationService);

    time = Date.now();

    users = signal<UserDTO[]>([]);
    currentUser = signal<UserDTO | null>(null);

    async load() {
        if (this.users().length > 0) return;

        const response = await fetch(USER_ENDPOINT);
        const data: UserResponse = await response.json();
        this.users.set(data);

         this.notificationService.notify('Update', 'Users loaded successfully' , 'success');
    }

    async loadUser(id: number) {

        if ( this.currentUser()?.id === id) return;

        const user = this.users().find(u => u.id === id);
        
        this.notificationService.notify('Selection', 'You selected a user', 'info');

        if (user) {
            this.currentUser.set(user);
            return;
        }

        const response = await fetch(USER_ENDPOINT + '/' + id);
        const data: UserDTO = await response.json();
        this.currentUser.set(data);
        
    }


}
