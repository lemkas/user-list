import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PopupFormComponent } from './components/popup-form/popup-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';
import { NgxMaskModule } from 'ngx-mask';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    UserListComponent,
    PopupFormComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
