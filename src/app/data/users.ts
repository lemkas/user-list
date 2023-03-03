import { IUser, POSITIONS } from '../models/user';

export const data: Array<IUser> = [
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
