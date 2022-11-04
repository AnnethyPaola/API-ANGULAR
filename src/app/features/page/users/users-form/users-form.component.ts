import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';
import Swal from 'sweetalert2';
import {Location} from '@angular/common'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  public form: FormGroup = new FormGroup([]);
 

  constructor(private service: UserService, private location: Location) { }

  private formCreate(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.max(10)]),
      lastName: new FormControl('', [Validators.max(10)]),
      email: new FormControl('',),
      phoneNumber: new FormControl('', [Validators.max(10)]),
      idNumber: new FormControl('',),
      birthDate: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('',),
        number: new FormControl('',),
        city: new FormControl('',),
        state: new FormControl(','),
        zip: new FormControl('',),
      }),
      status: new FormControl(0,)
    });
  }

  subtmit() {
    const User : user = {
      ...this.form.value
    } as user;
    this.service.create(User).subscribe(() => {
      Swal.fire(
       "Bien",
        "El usuario ha sido creado correctamente",
        "success"
      ),
      this.form.reset();
      this.location.back();
    },(data) =>{
      Swal.fire(
      "ERROR",
       "Ha ocurrido un error al crear el usuario",
        "error"
       )
    });
  
  }

  ngOnInit(): void {
    this.formCreate();
  }

  public get userStatus(): any[] {
    return [
      {
        key: 1,
        value: 'Activo',
      },
      {
        key: 2,
        value: 'Inactivo',
      },
      {
        key: 3,
        value: 'Pendiente',
      },
      {
        key: 4,
        value: 'Bloqueado',
      },
    ];
  }

}
