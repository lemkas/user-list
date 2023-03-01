import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IUser,
    private dialog: MatDialog,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
    this.userService.deleteUser(this.data.id);
    this.dialog.closeAll();
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
