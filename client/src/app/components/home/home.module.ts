import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { UserTableComponent } from '../user/user-table/user-table.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
