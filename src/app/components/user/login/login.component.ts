import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from '../../../models/identity/UserLogin';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  model = {} as UserLogin;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  /* login() {
    this.userService.login(this.model).subscribe(
      (response) => {
        this.router.navigateByUrl('/dashboard');
      },
      (error: any) => {
        if (error.status == 401)
          this.toaster.error('usuário ou senha inválido');
        else console.error(error);
      }
    );
  } */

  public login(): void {
    this.accountService.login(this.model).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      (error: any) => {
        if (error.status == 401)
          this.toaster.error('usuário ou senha inválido');
        else console.error(error);
      }
    );
  }
}
