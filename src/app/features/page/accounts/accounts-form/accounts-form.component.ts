import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { account } from 'src/app/shared/models/accounts.models';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import { user } from 'src/app/shared/models/users.models';
import { UserService } from 'src/app/services/User-Services/user.service';

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss']
})
export class AccountsFormComponent implements OnInit {

  users!: user[];

  public form1 : FormGroup = new FormGroup([]);

  constructor(
    private service : AccountsService,
    private location : Location,
    private serviceUser : UserService
  ) { }

  private formCreate() : void{
    this.form1 = new FormGroup({
    accountNumber: new FormControl ('', [Validators.max(16)]),
    accountType: new FormControl(0),
    balance: new FormControl(0),
    userId: new FormControl(0),
    status: new FormControl(0)
    })
  }

  ngOnInit(): void {
    this.formCreate();
    this.getAccount();
  }

  subtmit(){
    const Account : account = {
      ...this.form1.value
    } as account;
    this.service.create(Account).subscribe(() => {
      Swal.fire(
       "Bien",
        "Tarjeta agregada correctamente",
        "success"
      ),
      this.form1.reset();
      this.location.back();
    },(data) =>{
      Swal.fire(
      "ERROR",
       "Ha ocurrido un error al agregar tarjeta",
        "error"
       )
    });
  }

  getAccount(){
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
