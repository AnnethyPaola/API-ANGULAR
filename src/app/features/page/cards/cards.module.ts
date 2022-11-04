import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsRoutingModule } from './cards-routing.module';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { CardsEditComponent } from './cards-edit/cards-edit.component';

@NgModule({
  declarations: [
    CardsDetailsComponent,
    CardsListComponent,
    CardsFormComponent,
    CardsEditComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class CardsModule { }