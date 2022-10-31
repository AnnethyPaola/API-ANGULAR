import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu.models';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  @Input() menu!: Menu
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goto(route?:string){
    if(!route) return;
    this.router.navigate([route]);
  }
}
