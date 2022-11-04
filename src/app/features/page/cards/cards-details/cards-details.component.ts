import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/cards-service/card.service';
import { cards } from 'src/app/shared/models/cards.models';
import {Location} from '@angular/common'

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.scss']
})

export class CardsDetailsComponent implements OnInit {

  DatosCards! : cards;
 

  constructor(
    private activateRouter: ActivatedRoute,
    private service: CardService, 
    private location : Location
  ) { }

ngOnInit() {
    let UserAccount = this.activateRouter.snapshot.paramMap.get('id');
    console.log(UserAccount);
    this.service.loadById(UserAccount).subscribe(data => {
      this.DatosCards = data;
      console.log(data);
  });
}

Location(){
  this.location.back();
}
}
