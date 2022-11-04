import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/services/accounts-service/accounts.service';
import { account } from 'src/app/shared/models/accounts.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  
  accounts!: account[];

  constructor(private service: AccountsService) { }

  ngOnInit(): void {
   this.getAccount();
  }

  getAccount(){
    this.service.list().subscribe(datos => this.accounts = datos);
  }

  Modal(id: number){
    Swal.fire({
      title: 'Esta seguro de borrar esta entidad?',
      text: "Una vez borrada la entidad no sera recuperada!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAccounts(id)
        Swal.fire(
          'BORRADO!',
          'La entidad ha sido borrada correctamente',
          'success'
        )
        this.getAccount();
      }
    })
  }

  
  deleteAccounts(accountId:number){
    this.service.remove(accountId).subscribe(() =>{
    }, () =>{
      Swal.fire(
        "ERROR",
        "Ha ocurrido un error al eliminar la entidad",
        "error"
      )
    });
  }

}
