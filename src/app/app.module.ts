import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule, LoaderModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService, LoaderService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {   JwtHelperService, JwtModule,JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { AuthHttpService } from './httpServices/authHttp/auth-http.service';
import { CountriesService } from './httpServices/countries/countries.service';
import { CountriesModule } from './pages/countries/countries.component';
import { MainComponent } from './main/main.component';
import { PublicComponent } from './public/public.component';
import { VideocallModule, VideocallComponent } from './pages/videocall/videocall.component';
import { ExternalloginModule, ExternalloginComponent } from './pages/externallogin/externallogin.component';
import { callSessionService } from './httpServices/callSession/callSession.service';
import { RegisterFormComponent, RegisterFormModule } from './shared/components/register-form/register-form.component';
import { DxFormModule, DxButtonModule } from 'devextreme-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';






export function jwtTokenGetter() {
  return '';
}




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicComponent,
    RegisterFormComponent,
    VideocallComponent,
    ExternalloginComponent
  ],
  imports: [
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule ,
    MatFormFieldModule,
    DxButtonModule ,
    ReactiveFormsModule,
    RegisterFormModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    LoaderModule,
    AppRoutingModule,
    HttpClientModule,
    CountriesModule,
    VideocallModule,
    ExternalloginModule,
    DxFormModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [AuthService, 
              ScreenService, 
              AppInfoService,
              JwtHelperService,
              LoaderService,
              AuthHttpService,
              CountriesService,
              callSessionService,
              { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
