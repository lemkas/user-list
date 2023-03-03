import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFilter } from 'src/app/models/filter';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PopupFormComponent } from '../popup-form/popup-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dialog: MatDialog, private userService: UserService) {}
  users: IUser[] = [];
  tableHeaders: string[] = [
    'registrationDate',
    'fio',
    'position',
    'email',
    'password',
    'phoneNumber',
    'actions',
  ];

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.users = this.userService.users;
  }

  openForm(): void {
    let dialogRef = this.dialog.open(PopupFormComponent, {
      height: '610px',
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  private refresh(): void {
    this.users = [...this.userService.users];
  }

  openEditForm(row: IUser): void {
    let dialogRef = this.dialog.open(PopupFormComponent, {
      data: row,
      height: '610px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  deleteUser(row: IUser): void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: row,
      height: '160px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  getFilter(filter: IFilter): void {
    let val = filter.fio;
    if (val) {
      this.users = this.users.filter((user: IUser) => {
        return user.fio.toLowerCase().includes(val.toLowerCase());
      });
      console.log(this.users.length);
    } else {
      this.users = this.userService.users;
    }
  }
}
