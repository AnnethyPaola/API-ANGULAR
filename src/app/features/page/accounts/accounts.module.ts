import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsFormComponent } from './accounts-form/accounts-form.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { AccountsEditComponent } from './accounts-edit/accounts-edit.component';

@NgModule({
  declarations: [
    AccountsFormComponent,
    AccountsListComponent,
    AccountsDetailsComponent,
    AccountsEditComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class AccountsModule { }