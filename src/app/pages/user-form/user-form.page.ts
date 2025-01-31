import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.page.html',
  styleUrls: ['./user-form.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule ,
  ]
})
export class UserFormPage implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  user: User | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      isBlocked: [false],
    });
  }

 async ngOnInit() {
    const userIdParam = this.route.snapshot.paramMap.get('id');
    const userId = userIdParam;

    if (userId !== null) {
      this.isEditMode = true;
      this.user = await this.userService.getUserById(userId);

      if (this.user) {
        this.userForm.patchValue({
          name: this.user.name,
          email: this.user.email,
          isBlocked: this.user.isBlocked,
        });
      } else {
       
        this.router.navigate(['/user-list']);
      }
    } else {
      this.isEditMode = false;
    }
  }

  saveUser() {
   
    if (this.userForm.invalid) {
      return;
    }

    const userData = this.userForm.value;

    if (this.isEditMode && this.user) {
    
      this.userService.updateUser({ ...this.user, ...userData });
    } else {
  
      this.userService.addUser(userData);
    }

    this.router.navigate(['/user-list']);
  }
}
