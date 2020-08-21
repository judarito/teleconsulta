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

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  
    children:
          [
            {
              path: 'countries',
              component: CountriesComponent,
              canActivate: [ AuthGuardService ]
            },
          {
            path: 'display-data',
            component: DisplayDataComponent,
            canActivate: [ AuthGuardService ]
          },
          {
            path: 'profile',
            component: ProfileComponent,
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
          },
          {
            path: '**',
            redirectTo: 'home',
            canActivate: [ AuthGuardService ]
          }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent,CountriesComponent]
})
export class AppRoutingModule { }
