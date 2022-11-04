import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { HomeComponent } from "./page/home/home.component";


const routes : Routes = [
    {path: 'home', component: HomeComponent,
      canActivate: [AuthGuard]},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'user',
        loadChildren: () =>
          import('./page/users/users.module').then((m) => m.UsersModule),
          canActivate:[AuthGuard]
    },
    {
        path: 'account',
        loadChildren: () =>
          import('./page/accounts/accounts.module').then((m) => m.AccountsModule),
          canActivate: [AuthGuard]
      },

      {
        path: 'card',
        loadChildren: () =>
          import('./page/cards/cards.module').then((m) => m.CardsModule),
          canActivate: [AuthGuard]
      }, 

      
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FeatureRoutingModule{}