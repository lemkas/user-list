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
  constructor() {}

  getPositions(): POSITIONS[] {
    return this.positions;
  }
}
