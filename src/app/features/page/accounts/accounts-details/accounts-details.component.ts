import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { account } from 'src/app/shared/models/accounts.models';
import { user } from 'src/app/shared/models/users.models';
import { Location } from '@angular/common'

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.scss']
})
export class AccountsDetailsComponent implements OnInit {

  DatosAccount!: account;
  users!: user;

  constructor(
    private activateRouter: ActivatedRoute,
    private service: AccountsService,
    private location: Location
  ) { }


  form1 = new FormGroup({
    accountNumber: new FormControl('', [Validators.max(16)]),
    accountType: new FormControl(0),
    balance: new FormControl(0),
    userId: new FormControl(0),
    status: new FormControl(0)
  })

  getById() {
    let accountId = this.activateRouter.snapshot.paramMap.get('id');
    this.service.loadById(accountId).subscribe(data => {
      this.DatosAccount = data;
      this.form1.setValue({
        'accountNumber': this.DatosAccount.accountNumber,
        'accountType': this.DatosAccount.accountType,
        'balance': this.DatosAccount.balance,
        userId: this.DatosAccount.userId,
        status: this.DatosAccount.status
      })
      this.DatosAccount.status = Number(this.DatosAccount.status);
    })

  }

  ngOnInit(): void {
    this.getById();

  }

  Location() {
    this.location.back();
  }


}
