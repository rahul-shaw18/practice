import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export type User = {
  id: 1;
  firstName: 'Emily';
  lastName: 'Johnson';
  email: 'emily.johnson@x.dummyjson.com';
  username: 'emilys';
  role: 'admin | moderator | user';
  status?: boolean;
};

type UserResponse = {
  users: User[];
  skip: number;
  limit: number;
  total: number;
};

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);

  private readonly url = 'https://dummyjson.com/';

  getAllUser(): Observable<User[]> {
    return this.http.get<UserResponse>(this.url + 'user').pipe(map((res) => res.users));
  }

  getSearchUser(searchText: string): Observable<User[]> {
    return this.http
      .get<UserResponse>(this.url + 'user/search?q=' + searchText)
      .pipe(map((res) => res.users));
  }
}
