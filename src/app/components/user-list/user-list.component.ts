import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IFilter, IFilterForm } from 'src/app/models/filter';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { PopupFormComponent } from '../popup-form/popup-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dialog: MatDialog, private userService: UserService) {}
  users: IUser[] = [];
  filter!: any;
  tableHeaders: string[] = [
    'registrationDate',
    'fio',
    'position',
    'email',
    'password',
    'phoneNumber',
  ];
  private subscription!: Subscription;
  ngOnInit(): void {
    this.getUsers(this.filter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUsers(filter?: IFilter) {
    this.subscription = this.userService.getUsers(filter).subscribe((value) => {
      if (filter?.fio) {
        this.users = value.filter((user) => user.fio === filter.fio);
      } else {
        this.users = [...value];
      }
    });
  }
  openForm() {
    this.dialog.open(PopupFormComponent);
  }

  getFilter(filter: IFilter) {
    this.filter = filter;
    console.log(filter);
  }
}
