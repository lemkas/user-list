import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PopupFormComponent } from './components/popup-form/popup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    UserListComponent,
    PopupFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
