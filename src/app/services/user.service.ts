import { Injectable } from '@angular/core';
import { IUser, POSITIONS } from '../models/user';
import { data } from '../data/users';

export class UserService {
  private positions: POSITIONS[] = [
    POSITIONS.EXTERNAL_EXPERT,
    POSITIONS.DEVELOPER,
    POSITIONS.HRBR,
    POSITIONS.QA,
  ];

  users: Array<IUser> = data;

  constructor() {}

  getPositions(): POSITIONS[] {
    return this.positions;
  }

  createUser(user: IUser): void {
    this.users.push(user);
  }

  deleteUser(id: string) {
    this.users = this.users.filter((user: IUser) => user.id !== id);
  }

  updateUser(editedUser: IUser) {
    const oldUserIndex = this.users.findIndex(
      (user: IUser) => user.id === editedUser['id']
    );
    this.users[oldUserIndex] = editedUser;
  }
}
