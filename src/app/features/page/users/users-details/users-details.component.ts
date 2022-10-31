import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/User-Services/user.service';
import { user } from 'src/app/shared/models/users.models';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss']
})
export class UsersDetailsComponent implements OnInit {

  DatosUser!: user;

  constructor(
    private activateRouter: ActivatedRoute,
    private service: UserService
  ) { }

  ngOnInit() {
    let UserId = this.activateRouter.snapshot.paramMap.get('id');
    console.log(UserId);
    this.service.loadById(UserId).subscribe(data => {
      this.DatosUser = data;
      console.log(data);
    })
   
    }
}
