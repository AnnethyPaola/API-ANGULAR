import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: user[];
  usersstate!: user;

  constructor(
    private service: UserService,
    ) { }

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.service.list().subscribe(datos => this.users = datos);
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
        this.deleteUser(id)
        Swal.fire(
          'BORRADO!',
          'La entidad ha sido borrada correctamente',
          'success'
        )
        this.getUser();
      }
    })
  }

  deleteUser(accountId:number){
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
