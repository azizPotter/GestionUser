import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UserService } from '../../service/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../models/user.model';
import { UserCardComponent } from "../../user-card/user-card.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, RouterModule, UserCardComponent],
})
export class UserListPage implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
   await this.Reload()
  }

  async Reload() {
    this.users = await this.userService.getUsers();
  }
}