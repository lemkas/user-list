import { Injectable } from '@angular/core';
import { interval, map, Observable, takeWhile } from 'rxjs';

import { IUser, POSITIONS } from '../models/user';

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

  private changeFlag: boolean = false;

  constructor() {}

  getPositions(): POSITIONS[] {
    return this.positions;
  }

  createUser(user: Partial<any>) {
    this.users.push(user);
  }

  activateChangeFlag() {
    this.changeFlag = true;
    setTimeout(() => {
      this.changeFlag = false;
    }, 1000);
  }

  getChangeFlag(): Observable<Boolean> {
    return interval(1500).pipe(
      takeWhile(() => true),
      map(() => this.changeFlag)
    );
  }
}
