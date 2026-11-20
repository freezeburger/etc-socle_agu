import { Component, signal, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserApi } from '../../core/services/user.api';
import { FormsModule } from '@angular/forms';
import { SearchInputUi } from '../../shared/components/search-input/search-input.ui';


@Component({
  imports: [RouterLink, FormsModule, SearchInputUi],
  selector: 'app-user',
  styleUrl: './user.scss',
  templateUrl: './user.html',
})
export class User {

  userApi = inject(UserApi);

  searchTerm = signal('');

  filteredUsers = computed(() => {
    const term = this.searchTerm();

    if (term.length < 3) return this.userApi.users();

    return this.userApi.users().filter(user =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(term.toLowerCase())
    );

  });

  ngOnInit() {
    this.userApi.load();
    console.log(this.userApi);
  }

}
