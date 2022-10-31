import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { account } from 'src/app/shared/models/accounts.models';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.scss']
})
export class AccountsDetailsComponent implements OnInit {

  DatosAccount!: account;

  constructor(
    private activateRouter: ActivatedRoute,
    private service: AccountsService
  ) { }

  ngOnInit(): void {
    let UserAccount = this.activateRouter.snapshot.paramMap.get('id');
    console.log(UserAccount);
    this.service.loadById(UserAccount).subscribe(data => {
      this.DatosAccount = data;
      console.log(data);
  });

}

 }
