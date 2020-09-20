import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { ProfileService } from 'src/app/httpServices/profile/profile.service';


@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;
  idUserLoged = localStorage.getItem('iduser');

  constructor(private profileservice: ProfileService, private auth:AuthService) {

    this.profileservice.getProfileById(this.idUserLoged).subscribe((res)=>{
      console.log(res)
    })    

    this.employee = {
      ID: this.idUserLoged,
      FirstName: 'Sandra',
      LastName: 'Johnson',
      Prefix: 'Mrs.',
      Position: 'Controller',
      Picture: 'images/employees/06.png',
      BirthDate: new Date('1974/11/15'),
      HireDate: new Date('2005/05/11'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      Address: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
