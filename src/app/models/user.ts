export interface IUser {
  id: string;
  registrationDate: string;
  fio: string;
  position: POSITIONS;
  email: string;
  password: string;
  phoneNumber: string;
}

export const enum POSITIONS {
  EXTERNAL_EXPERT = 'Внешний эксперт',
  HRBR = 'HR BR',
  DEVELOPER = 'Разработчик',
  QA = 'Тестировщик',
}
