import { Injectable } from '@angular/core';
import { POSITIONS } from '../models/user';

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

  public users: any[] = [
    {
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: POSITIONS.DEVELOPER,
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: POSITIONS.DEVELOPER,
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      registrationDate: '2022-02-01',
      fio: 'Антон Глов',
      position: POSITIONS.QA,
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
}
