import { Component, inject, input } from '@angular/core';
import { UserApi } from '../../core/services/user.api';
import { RouterOutlet } from '@angular/router';


@Component({
  imports: [RouterOutlet],
  selector: 'app-user-detail',
  styleUrl: './user-detail.scss',
  templateUrl: './user-detail.html',
})
export class UserDetail {

  userApi = inject(UserApi);

  id = input<string>('');


  ngOnInit() {
    this.userApi.loadUser( Number(this.id()) );
    console.log(this.userApi);
  }

}
