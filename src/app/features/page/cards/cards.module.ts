import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsFormComponent } from './cards-form/cards-form.component';

@NgModule({
  declarations: [
    CardsDetailsComponent,
    CardsListComponent,
    CardsFormComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }