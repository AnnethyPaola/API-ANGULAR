import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersEditComponent } from './users-edit/users-edit.component';

import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {path:'list', component: UsersListComponent},
  {path:'create', component: UsersFormComponent},
  {path:'edit/:id', component: UsersEditComponent},
  {path:'details/:id', component: UsersDetailsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }