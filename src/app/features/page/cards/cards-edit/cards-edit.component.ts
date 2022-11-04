import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-edit',
  templateUrl: './cards-edit.component.html',
  styleUrls: ['./cards-edit.component.scss']
})
export class CardsEditComponent implements OnInit {

  card! :cards;

  constructor(
    private serviceCard : CardService, 
    private activateRouter: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getById();
  }

    form = new FormGroup({
    cardNumber: new FormControl (''),
    cardType: new FormControl(0),
    ammount: new FormControl(0),
    balance: new FormControl(0),
    userId: new FormControl(''),
    status: new FormControl(0)
  })

  getById() {
    let accountId = this.activateRouter.snapshot.paramMap.get('id');
    this.serviceCard.loadById(accountId).subscribe(data => {
      this.card = data;
      this.form.setValue({
     'cardNumber': this.card.cardNumber,
      cardType:this.card.cardType,
      ammount: this.card.ammount,
      balance: this.card.balance,
      'userId': this.card.userId,
      status: this.card.status
      })
    })
  }

  EditCard(Card: cards) {
    this.serviceCard.update(Card).subscribe(
      () => {
        Swal.fire(
          "Bien",
          "La tarjeta ha sido editada correctamente",
          "success"
        )
        this.form.reset();
        this.location.back();
      },
      () => {
        Swal.fire(
          "ERROR",
          "Ha ocurrido un error al editar tarjeta",
          "error"
        )
      }
    );
  }

  subtmit(){
    let cardId = this.activateRouter.snapshot.paramMap.get('id');
    const card: cards = {
      ...this.form.value,
    } as cards;
    card.id = cardId as any
    this.EditCard(card);
  
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
