import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { UserService } from 'src/app/services/User-Services/user.service';
import { account } from 'src/app/shared/models/accounts.models';
import { user } from 'src/app/shared/models/users.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.scss']
})
export class AccountsEditComponent implements OnInit {

  users!: user[];
  accounts!: account;

  constructor(
    private service: AccountsService,
    private activateRouter: ActivatedRoute,
    private serviceUser: UserService,
    private location: Location
  ) { }

  form1 = new FormGroup({
    accountNumber: new FormControl('', [Validators.max(16)]),
    accountType: new FormControl(0),
    balance: new FormControl(0),
    userId: new FormControl(0),
    status: new FormControl(0)
  })


  ngOnInit(): void {
    this.getAccount();
    this.getById();
  }

  getById() {
    let accountId = this.activateRouter.snapshot.paramMap.get('id');
    this.service.loadById(accountId).subscribe(data => {
      this.accounts = data;
      this.form1.setValue({
        'accountNumber': this.accounts.accountNumber,
        'accountType': this.accounts.accountType,
        'balance': this.accounts.balance,
        userId: this.accounts.userId,
        status: this.accounts.status
      })
    })
  }

  EditAccount(accounts: account) {
    this.service.update(accounts).subscribe(
      () => {
        Swal.fire(
          "Bien",
          "La cuenta ha sido edit correctamente",
          "success"
        )
        this.form1.reset();
        this.location.back();
      },
      () => {
        Swal.fire(
          "ERROR",
          "Ha ocurrido un error al agregar tarjeta",
          "error"
        )
      }
    );
  }

  subtmit() {
    let accountId = this.activateRouter.snapshot.paramMap.get('id');
    const account: account = {
      ...this.form1.value,
    } as account;
    account.id = accountId as any
    this.EditAccount(account);
  
  }

  getAccount() {
    this.serviceUser.list().subscribe(datos => this.users = datos);
  }

  public get Status(): any[] {
    return [
      {
        key: 1,
        value: 'ACTIVO',
      },
      {
        key: 2,
        value: 'INACTIVO',
      },
    ];
  }

  public get TypeAccount(): any[] {
    return [
      {
        key: 1,
        value: 'CHECKING',
      },
      {
        key: 2,
        value: 'SAVINGS',
      },
    ];
  }
}