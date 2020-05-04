import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];
  user: User;
  constructor( private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }
    name = new FormControl('', [Validators.required]);
    

    getErrorMessage() {
      if (this.name.hasError('required')) {
        return 'You Must Enter Name';
      }
  
      return this.name.hasError('name') ? 'You Must Enter Name' : '';
    }
  
  ngOnInit(): void {
    this.user = new User();
  }

  
  save() {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
