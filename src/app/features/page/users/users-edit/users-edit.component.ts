import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';
import { userStatus } from 'src/app/core/enums/users.enum';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {

  public form: FormGroup = new FormGroup([]);
  
  user! : user;

  constructor(
    private serviceUser : UserService, 
    private activateRouter: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.setData();
  }

  subtmit(){
    let userId = this.activateRouter.snapshot.paramMap.get('id');
    const user: user = {
      ...this.form.value,
    } as user;

    user.id = userId  as any;
    user.status = Number(user.status);
    user.status = Number(user.status);
    this.editUser(user);

  }

  private initializeForm(): void {
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
 setData() : any{
  let userId = this.activateRouter.snapshot.paramMap.get('id');
  if(userId != null){
    this.serviceUser.loadById(userId).subscribe((data) =>{
      this.form.patchValue({
        ...data
      });
    });
  }
 }

 editUser(user : user){
  this.serviceUser.update(user).subscribe(
    () => {
      Swal.fire(
        "Bien",
        "El usuario ha sido editada correctamente",
        "success"
      )
      this.form.reset();
      this.location.back();
    },
    () => {
      Swal.fire(
        "ERROR",
        "Ha ocurrido un error al editar el usuaio",
        "error"
      )
    }
  );
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


