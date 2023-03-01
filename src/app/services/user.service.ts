import { Injectable } from '@angular/core';
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

  public users: Array<IUser | any> = [
    {
      id: '57438',
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: POSITIONS.DEVELOPER,
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      id: '57433',
      registrationDate: '2022-02-01',
      fio: 'Лемов Никита',
      position: POSITIONS.DEVELOPER,
      email: 'lemov@mail.ru',
      password: 'LE2342',
      phoneNumber: '+79999851404',
    },
    {
      id: '57432',
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

  createUser(user: Partial<any>): void {
    this.users.push(user);
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  updateUser(editedUser: Partial<any>) {
    const oldUserIndex = this.users.findIndex(
      (user) => user.id === editedUser['id']
    );
    this.users[oldUserIndex] = editedUser;
  }
}
