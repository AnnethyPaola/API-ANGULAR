import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { UsersEditComponent } from './users-edit/users-edit.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    UsersDetailsComponent,
    UsersEditComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class UsersModule { }