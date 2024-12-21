import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user';
import { UserHttpService } from '../../providers/user-http.service';
import { AddUserDialogComponent } from '../user-dialog/user-dialog.component';
import { BaseComponent } from '../../base.component';
import { ErrorUtils } from 'src/app/utils/error-utils';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent extends BaseComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['user_name', 'first_name', 'last_name', 'email', 'user_status', 'department', 'actions'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
  errors: any;
  success: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private userHttpService: UserHttpService,
    private dialog: MatDialog
  ) {
    super();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadUsers(): void {
    this.userHttpService.getUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
      },
      error: (response: any) => {
        this.errors = ErrorUtils.mapError(response.error);
      },
    });
  }

  deleteUser(user: User): void {
    this.userHttpService.deleteUser(user.user_id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((u) => u.user_id !== user.user_id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.errors = ErrorUtils.mapError(err);
      },
    });
  }

  openUserDialog(user?: User): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      data: user,
    });

    dialogRef.afterClosed().subscribe((result: User) => {
      if (result) {
        if (user) {
          this.updateUser(result);
        } else {
          this.addUser(result);
        }
      }
    });
  }

  updateUser(updatedUser: User): void {
    this.userHttpService.updateUser(updatedUser).subscribe({
      next: () => {
        const index = this.dataSource.data.findIndex((u) => u.user_id === updatedUser.user_id);
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
      next: (createdUser) => {
        this.dataSource.data = [...this.dataSource.data, createdUser];
      },
      error: (response: any) => {
        this.errors = ErrorUtils.mapError(response.error);
      },
    });
  }
}
