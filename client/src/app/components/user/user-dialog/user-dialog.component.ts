import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class AddUserDialogComponent implements OnInit {
  userForm!: UntypedFormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    private fb: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) public existingUser: User | null
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      user_name: [this.existingUser?.username || '', Validators.required],
      first_name: [this.existingUser?.first_name || '', [Validators.required, Validators.minLength(2)]],
      last_name: [this.existingUser?.last_name || '', Validators.required],
      email: [this.existingUser?.email || '', [Validators.required, Validators.email]],
      user_status: [this.existingUser?.status || 'A', Validators.required],
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
