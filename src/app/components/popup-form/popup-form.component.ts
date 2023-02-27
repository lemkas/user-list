import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IUser, IUserCreateForm, POSITIONS } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss'],
})
export class PopupFormComponent implements OnInit {
  createForm!: FormGroup<IUserCreateForm>;
  positions: POSITIONS[] = this.userService.getPositions();

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createForm = this.fb.nonNullable.group({
      registrationDate: ['', Validators.required],
      fio: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(256),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(256),
          Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/),
        ],
      ], // Строчные и прописные латинские буквы, цифры
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['+7', [Validators.required]],
      position: ['', Validators.required],
    });
  }

  private preparePhone(): void {
    const code: string = '+7';
    const phoneNumberControl = this.createForm.get('phoneNumber');
    phoneNumberControl?.setValue(code + phoneNumberControl.value);
  }

  submitForm(): void {
    this.preparePhone();
    this.userService.createUser(this.createForm.value);
    this.dialog.closeAll();
  }
}
