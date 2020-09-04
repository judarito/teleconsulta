import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { CountriesComponent } from './pages/countries/countries.component';
import { MainComponent } from './main/main.component';
import { PublicComponent } from './public/public.component';
import { ExternalloginComponent } from './pages/externallogin/externallogin.component';
import { VideocallComponent } from './pages/videocall/videocall.component';
import { RegisterFormComponent } from './shared/components/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:
          [
            {
              path: 'profile',
              component: ProfileComponent,
              canActivate: [ AuthGuardService ]
            },
          {
            path: 'countries',
            component: CountriesComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: '',
            component: HomeComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'display-data',
            component: DisplayDataComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'home',
            component: HomeComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'login-form',
            component: LoginFormComponent,
            canActivate: [ AuthGuardService ]
          }]
},
{
  path:'',
  component:PublicComponent,
  children:[
    
    {
      path: 'register',
      component: RegisterFormComponent,
      
    },
    {
      path: 'Elogin/:id',
      component: ExternalloginComponent
    },
    {
      path: 'video/:id',
      component: VideocallComponent,
      canActivate: [ AuthGuardService ]
    }
  ]
},
{
  path:'**',
  redirectTo: 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent,CountriesComponent]
})
export class AppRoutingModule { }
