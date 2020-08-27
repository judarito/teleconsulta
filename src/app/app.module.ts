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
import { VideocallModule } from './pages/videocall/videocall.component';
import { ExternalloginModule } from './pages/externallogin/externallogin.component';
import { callSessionService } from './httpServices/callSession/callSession.service';





export function jwtTokenGetter() {
  return '';
}




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PublicComponent
  ],
  imports: [
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
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
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
