import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupFormComponent } from '../popup-form/popup-form.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openForm() {
    this.dialog.open(PopupFormComponent);
  }
}
