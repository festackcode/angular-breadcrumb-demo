import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';
import { USERS } from './mock-users';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() { }

  getUsers(): Observable<UserData[]> {
    return of(USERS);
  }

  getUser(id: number | string) {
    return this.getUsers().pipe(
      // (+) before `id` turns the string into a number
      map((users: UserData[]) => users.find(hero => hero.id === +id))
    );
  }
}
