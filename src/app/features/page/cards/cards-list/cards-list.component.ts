import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';
import { user } from 'src/app/shared/models/users.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cards!: cards[];
  user! : user;

  constructor(private service: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(){
    this.service.list().subscribe(datos => this.cards = datos);
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
        this.deleteCarde(id)
        Swal.fire(
          'BORRADO!',
          'La entidad ha sido borrada correctamente',
          'success'
        )
        this.getCards();
      }
    })
  }

  deleteCarde(cardId: number){
    this.service.remove(cardId).subscribe(() =>{
    }, () =>{
      Swal.fire(
        "ERROR",
        "Ha ocurrido un error al eliminar la entidad",
        "error"
      )
    });
  }
}
