import { Component, inject, input } from '@angular/core';
import { UserApi } from '../../core/services/user.api';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonUi } from '../../shared/components/button/button.ui';


@Component({
  imports: [RouterOutlet,ButtonUi, RouterLink],
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
