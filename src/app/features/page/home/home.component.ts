import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Bank WordPress';

  menus:Menu[] = [
    {title:'User', img:'assets/img/user.png', route:'user/list'},
    {title:'Accounts', img:'assets/img/account.png', route:'account/list'},
    {title: 'Cards', img: 'assets/img/card.png' , route: 'card/list'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
