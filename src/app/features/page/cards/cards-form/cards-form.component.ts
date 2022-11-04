import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';
import Swal from 'sweetalert2';
import {Location} from '@angular/common'
import { user } from 'src/app/shared/models/users.models';
import { UserService } from 'src/app/services/User-Services/user.service';

@Component({
  selector: 'app-cards-form',
  templateUrl: './cards-form.component.html',
  styleUrls: ['./cards-form.component.scss']
})
export class CardsFormComponent implements OnInit {

  cards! : cards;
  users!: user[];

  public form : FormGroup = new FormGroup([]);

  constructor(private service : CardService, private location : Location,
    private serviceUser : UserService) { }

  private formCreate() : void{
    this.form = new FormGroup({
      cardNumber: new FormControl (''),
      cardType: new FormControl(0),
      ammount: new FormControl(0),
      balance: new FormControl(0),
      userId: new FormControl(0),
      status: new FormControl(0)
    })
  }

  subtmit(){
    const Card : cards = {
      ...this.form.value
    } as cards;
    this.service.create(Card).subscribe(() => {
      Swal.fire(
       "Bien",
        "Tarjeta agregada correctamente",
        "success"
      ),
      this.form.reset();
      this.location.back();
    },(data) =>{
      Swal.fire(
      "ERROR",
       "Ha ocurrido un error al agregar tarjeta",
        "error"
       )
    });
  }

  getUser(){
    this.serviceUser.list().subscribe(datos => this.users = datos);
  }

  ngOnInit(): void {
    this.formCreate();
    this.getUser();
  }

  public get Status(): any[] {
    return [
      {
        key: 1,
        value: 'Activo',
      },
      {
        key: 2,
        value: 'Inactivo',
      },
    ];
  }

  public get TypeCard(): any[] {
    return [
      {
        key: 1,
        value: 'VISA',
      },
      {
        key: 2,
        value: 'MASTERCARD',
      },
    ];
  }


}
