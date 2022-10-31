import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users!: user[];
 

  constructor(private service: UserService) { }

  ngOnInit(){
    this.service.list().subscribe(datos => this.users = datos);
    
  }

  loadById(id: any){
    return null;
  }

}
