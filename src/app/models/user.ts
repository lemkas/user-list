import { FormControl } from '@angular/forms';

export interface IUser {
  registrationDate: FormControl<string>;
  fio: FormControl<string>;
  position: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  phoneNumber: FormControl<string>;
}

export enum POSITIONS {
  EXTERNAL_EXPERT = 'Внешний эксперт',
  HRBR = 'HR BR',
  DEVELOPER = 'Разработчик',
  QA = 'Тестировщик',
}
