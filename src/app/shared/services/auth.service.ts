import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import notify from 'devextreme/ui/notify';
import { AuthHttpService } from 'src/app/httpServices/authHttp/auth-http.service';
import { LoginRequestModel } from 'src/app/models/authLogin/loginModel';

const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthService {
  loggedIn = true;

  constructor(private router: Router,
              public jwtHelper: JwtHelperService,
              private authHttpService: AuthHttpService) {
                this.jwtHelper=new JwtHelperService();
              
              }

  logIn(login: string, passord: string) {
   
    let loginRequestModel: LoginRequestModel
    loginRequestModel={
      Username:login,
      Password:passord
    }
    this.authHttpService.Login(loginRequestModel).subscribe((res)=>{
      console.log(res);
      this.loggedIn = true;

      if(res.token){
        this.loggedIn = true;
        localStorage.setItem("jwt",res.token);
        this.router.navigate(['/']);
      }
    },(Err:any)=>{
      console.log(Err);
      notify("Error al iniciar session","error",2000);
    })
    
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    const token = localStorage.getItem('jwt');
    this.loggedIn=!jwtHelper.isTokenExpired(token);
    return this.loggedIn;
  }

}

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isLoggedIn = this.authService.isLoggedIn;
        const isLoginForm = route.routeConfig.path === 'login-form';

        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }

        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }

        return isLoggedIn || isLoginForm;
    }
}
