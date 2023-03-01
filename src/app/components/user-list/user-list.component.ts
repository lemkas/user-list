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
    let dialogRef = this.dialog.open(PopupFormComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  refresh(): void {
    this.users = [...this.userService.users];
  }

  openEditForm(row: IUser): void {
    let dialogRef = this.dialog.open(PopupFormComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refresh();
    });
  }

  deleteUser(row: IUser) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: row,
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
    } else {
      this.users = this.userService.users;
    }
  }
}
