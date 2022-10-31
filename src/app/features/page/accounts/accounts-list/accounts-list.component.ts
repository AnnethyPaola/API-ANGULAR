import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { account } from 'src/app/shared/models/accounts.models';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  
  accounts!: account[];

  constructor(private service: AccountsService) { }

  ngOnInit(): void {
    this.service.list().subscribe(datos => this.accounts = datos);
  }

}
