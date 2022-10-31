import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  cards!: cards[];

  constructor(private service: CardService) { }

  ngOnInit(): void {
    this.service.list().subscribe(datos => this.cards = datos);
  }

}
