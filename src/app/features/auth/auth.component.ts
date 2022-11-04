import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private _router: Router,
    private _authService: AuthService,
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    'gmail': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8)])

  })

  submit() {
    if(this.form.valid){
      this._authService.setToken('true')
      this._router.navigate(['/home'])
    }
  }

}
