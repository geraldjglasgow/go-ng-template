import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UserHttpService } from '@app/providers/user-http.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class AddUserDialogComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public existingUser: User | null
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      user_name: [this.existingUser?.user_name || '', Validators.required],
      first_name: [this.existingUser?.first_name || '', [Validators.required, Validators.minLength(2)]],
      last_name: [this.existingUser?.last_name || '', Validators.required],
      email: [this.existingUser?.email || '', [Validators.required, Validators.email]],
      user_status: [this.existingUser?.user_status || 'A', Validators.required],
      department: [this.existingUser?.department || '', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = { ...this.existingUser, ...this.userForm.value };
      this.dialogRef.close(updatedUser);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
