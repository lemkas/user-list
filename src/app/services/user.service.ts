import { Injectable } from '@angular/core';
import { Observable, map, takeWhile, interval } from 'rxjs';
import { IUser, IUserCreateForm, POSITIONS } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private positions: POSITIONS[] = [
    POSITIONS.EXTERNAL_EXPERT,
    POSITIONS.DEVELOPER,
    POSITIONS.HRBR,
    POSITIONS.QA,
  ];

  public users: any = [
    {
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: 'Разработчик',
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: 'Разработчик',
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      registrationDate: '2022-02-01',
      fio: 'Антон Глов',
      position: 'Разработчик',
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
  ];
  constructor() {}

  getPositions(): POSITIONS[] {
    return this.positions;
  }

  createUser(user: Partial<any>) {
    this.users.push(user);
  }

  getUsers(): Observable<IUser[]> {
    return interval(1000).pipe(
      takeWhile(() => true),
      map(() => this.users)
    );
  }
}
