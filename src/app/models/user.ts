import { FormControl } from '@angular/forms';

export interface IUserCreateForm {
  registrationDate: FormControl<string>;
  fio: FormControl<string>;
  position: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phoneNumber: FormControl<string>;
}

export interface IUser {
  // id: string;
  registrationDate: string;
  fio: string;
  position: POSITIONS;
  email: string;
  password: string;
  phoneNumber: string;
}

export enum POSITIONS {
  EXTERNAL_EXPERT = 'Внешний эксперт',
  HRBR = 'HR BR',
  DEVELOPER = 'Разработчик',
  QA = 'Тестировщик',
}
