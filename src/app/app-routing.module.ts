import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AuthComponent } from './features/auth/auth.component';
import { AccountsFormComponent } from './features/page/accounts/accounts-form/accounts-form.component';
import { CardsFormComponent } from './features/page/cards/cards-form/cards-form.component';
import { UsersFormComponent } from './features/page/users/users-form/users-form.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/feature.module').then((m) => m.FeaturesModule),
  },
  {path:'create', component: UsersFormComponent,canActivate: [AuthGuard]},
  {path:'edit/:id', component: UsersFormComponent, canActivate: [AuthGuard]},
  {path : 'createAccount', component: AccountsFormComponent, canActivate: [AuthGuard]},
  {path: 'createCard', component: CardsFormComponent, canActivate: [AuthGuard]},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
