import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPage } from './pages/user-list/user-list.page';
import { UserFormPage } from './pages/user-form/user-form.page';

const routes: Routes = [
  {
    path: 'user-list',
    component: UserListPage,
  },
  {
    path: 'user-form',
    component: UserFormPage,
  },
  {
    path: 'user-form/:id',
    component: UserFormPage,  
  },
  {
    path: '',
    redirectTo: '/user-list',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}