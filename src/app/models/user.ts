export interface IUser {
  registrationDate: string;
  fio: string;
  position: POSITIONS;
  email: string;
  password: string;
  phoneNumber: string;
}

enum POSITIONS {
  EXTERNAL_EXPERT = 'Внешний эксперт',
  HRBR = 'HR BR',
  DEVELOPER = 'Разработчик',
  QA = 'Тестировщик',
}
