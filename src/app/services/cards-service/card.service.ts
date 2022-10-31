import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud-service';
import { cards } from 'src/app/shared/models/cards.models';

@Injectable({
  providedIn: 'root'
})
export class CardService extends CrudService<cards> {

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}creditCards`);
   }
}
