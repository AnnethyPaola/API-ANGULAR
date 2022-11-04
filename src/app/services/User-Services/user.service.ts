import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'src/app/shared/models/users.models';
import { environment } from 'src/environments/environment';
import { CrudService } from '../crud-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<user> {

  constructor(protected override http: HttpClient) {
    super(http, 'users');
  }
}
