import { Component, OnInit, inject } from '@angular/core';
import { User } from '../../../models/user';
import { UserHttpService } from '../../../providers/user-http.service';
import { BaseComponent } from '../../../base.component';
import { ErrorUtils } from 'src/app/utils/error-utils';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['username', 'first_name', 'last_name', 'email', 'status', 'department', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  errors: any;
  isLoading: boolean = true;
  success: boolean = false;

  constructor(
    private userHttpService: UserHttpService,
    private dialog: MatDialog,
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  openDialog(user: User | null): void {
    this.dialog.open(AddUserDialogComponent, {
      data: user,
    });
  }

  loadUsers(): void {
    this.userHttpService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
      },
      error: (response: any) => {
        this.errors = ErrorUtils.mapError(response.error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  deleteUser(user: User): void {
    this.userHttpService.deleteUser(user.id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((u) => u.id !== user.id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.errors = ErrorUtils.mapError(err);
      },
    });
  }

  updateUser(updatedUser: User): void {
    this.userHttpService.updateUser(updatedUser).subscribe({
      next: () => {
        const index = this.dataSource.data.findIndex((u) => u.id === updatedUser.id);
        if (index !== -1) {
          this.dataSource.data[index] = updatedUser;
          this.dataSource.data = [...this.dataSource.data];
        }
      },
      error: (response: any) => {
        this.errors = ErrorUtils.mapError(response.error);
      },
    });
  }

  addUser(newUser: User): void {
    this.userHttpService.addUser(newUser).subscribe({
      next: () => {
        this.dataSource.data = [...this.dataSource.data, newUser];
      },
      error: (response: any) => {
        this.errors = ErrorUtils.mapError(response.error);
      },
    });
  }
}
