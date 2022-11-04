import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsEditComponent } from './cards-edit/cards-edit.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { CardsListComponent } from './cards-list/cards-list.component';



const routes: Routes = [
  {path:'list', component: CardsListComponent},
  {path:'create', component: CardsFormComponent},
  {path:'edit/:id', component: CardsEditComponent},
  {path:'details/:id', component: CardsDetailsComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }