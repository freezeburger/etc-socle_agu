import { Component, inject, input, signal } from '@angular/core';
import { USER_ENDPOINT, UserDTO } from '../../core/types';
import { UserApi } from '../../core/services/user.api';

@Component({
  imports: [],
  selector: 'app-user-detail',
  styleUrl: './user-detail.scss',
  templateUrl: './user-detail.html',
})
export class UserDetail {

  userApi = inject(UserApi);

  id = input<string>('');

  /* user = signal<UserDTO | null>(null) */

  ngOnInit() {
    this.userApi.loadUser( Number(this.id()) );
    console.log(this.userApi);
  }

  /* async load() {
    const response = await fetch(USER_ENDPOINT + '/' + this.id());
    const data: UserDTO = await response.json();
    this.user.set(data);
  } */

}
