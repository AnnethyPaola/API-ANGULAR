import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./page/home/home.component";


const routes : Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'user',
        loadChildren: () =>
          import('./page/users/users.module').then((m) => m.UsersModule),
    },
    {
        path: 'account',
        loadChildren: () =>
          import('./page/accounts/accounts.module').then((m) => m.AccountsModule),
      },

      {
        path: 'card',
        loadChildren: () =>
          import('./page/cards/cards.module').then((m) => m.CardsModule),
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class FeatureRoutingModule{}