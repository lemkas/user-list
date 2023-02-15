import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFilterForm } from 'src/app/models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup<IFilterForm>;
  @Output() filterHandler = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.filterForm = this.fb.nonNullable.group({
      fio: '',
    });
  }

  submitForm(): void {
    this.filterHandler.emit(this.filterForm.value);
  }

  change(event: any): void {
    console.log(event.length);
    if (!event.length) this.filterHandler.emit(this.filterForm.value);
  }
}
