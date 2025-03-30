import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    ],
  bootstrap: [HomeComponent],
})
export class HomeModule { }
