import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  ReactiveFormsModule, } from '@angular/forms';
import { Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ]
})
export class UserCardComponent implements OnInit {

  @Input() user: any;
  @Output() userDeleted = new EventEmitter<void>();
  constructor(private userService: UserService,private router: Router) {}

  ngOnInit() {}

  toggleBlockStatus() {
    this.user.isBlocked = !this.user.isBlocked;
    this.userService.updateUser(this.user);
  }

  navigateToAddUser(): void {
    this.router.navigate(['/user-form']);
  }
  editUser(userId: string): void {
    console.log(userId);
    this.router.navigate(['/user-form', { id: userId }]);
  }
  deleteUser(userId: string): void {
    this.userService.deleteUser(userId);
      this.userDeleted.emit();  
  }

}
