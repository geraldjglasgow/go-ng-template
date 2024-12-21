import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'User Management System';

  constructor(private readonly router: Router) {
  }

  public goToLogin(): void {
    this.router.navigateByUrl('/login');
  }
}