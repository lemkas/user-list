import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IUser, POSITIONS } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UUID } from 'angular2-uuid';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss'],
})
export class PopupFormComponent implements OnInit {
  createForm!: FormGroup;
  positions: POSITIONS[] = this.userService.getPositions();
  title!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IUser,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.getHeaderText();
    this.initForm();
  }

  private getHeaderText(): void {
    this.title = this.data
      ? `Редактирование пользователя ${this.data.fio} `
      : 'Добавление данных о экспертах по оценке и руководителей';
  }

  private initForm(): void {
    this.createForm = this.fb.nonNullable.group({
      id: this.data ? this.data.id : UUID.UUID(),
      registrationDate: [
        this.data ? this.data.registrationDate : '',
        Validators.required,
      ],
      fio: [
        this.data ? this.data.fio : '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(256),
        ],
      ],
      password: [
        this.data ? this.data.password : '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(256),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
        ],
      ], // Строчные и прописные латинские буквы, цифры
      email: [
        this.data ? this.data.email : '',
        [Validators.required, Validators.email],
      ],
      phoneNumber: [
        this.data ? this.data.phoneNumber : '',
        [Validators.required],
      ],
      position: [this.data ? this.data.position : '', Validators.required],
    });
  }

  private preparePhone(): void {
    const code: string = '+7';
    const phoneNumberControl = this.createForm.get('phoneNumber');
    if (!phoneNumberControl?.value.includes('+7'))
      phoneNumberControl?.setValue(code + phoneNumberControl.value);
  }

  submitForm(): void {
    this.preparePhone();
    this.userService.createUser(this.createForm.value);
    this.dialog.closeAll();
    console.log(this.createForm.value);
  }

  submitEditForm(): void {
    this.preparePhone();
    this.userService.updateUser(this.createForm.value);
    this.dialog.closeAll();
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
}
