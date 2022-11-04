import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';
import {Location} from '@angular/common'

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  DateUser!: user;
  

  constructor(
    private activateRouter: ActivatedRoute,
    private service: UserService,
    private location : Location
  ) { }

  ngOnInit() {
    let UserId = this.activateRouter.snapshot.paramMap.get('id');
    console.log(UserId);
    this.service.loadById(UserId).subscribe(data => {
      this.DateUser = data;
      console.log(data);
    })
    }

    Location(){
      this.location.back();
    }
}
