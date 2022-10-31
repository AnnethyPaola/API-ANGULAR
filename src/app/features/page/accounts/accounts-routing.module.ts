import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';
import { AccountsFormComponent } from './accounts-form/accounts-form.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';


const routes: Routes = [
  {path:'list', component: AccountsListComponent},
  {path:'create', component: AccountsFormComponent},
  {path:'edit/:id', component: AccountsFormComponent},
  {path:'details/:id', component: AccountsDetailsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }