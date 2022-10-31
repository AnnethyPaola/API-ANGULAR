import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { account } from 'src/app/shared/models/accounts.models';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud-service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService extends CrudService<account>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}accounts`);
  }
}
