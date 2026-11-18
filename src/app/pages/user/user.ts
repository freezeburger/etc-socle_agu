import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserApi } from '../../core/services/user.api';


@Component({
  imports: [RouterLink],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User {

  userApi = inject(UserApi);

  /* users = signal<any>([]) */

  ngOnInit() {
    this.userApi.load();
    console.log(this.userApi);
  }

  /* async load() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    this.users.set(data.users);
  } */
}
