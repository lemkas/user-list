import { FormControl } from '@angular/forms';

export interface IFilterForm {
  fio: FormControl<string>;
}

export interface IFilter {
  fio: string;
}
