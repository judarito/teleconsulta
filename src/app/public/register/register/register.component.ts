import { Component,  NgModule, ViewChild, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule,
         DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { registerModel } from 'src/app/models/register/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  @ViewChild(DxFormComponent, { static: false }) form:DxFormComponent
  RegisterModel:registerModel;
  constructor() { }


}
@NgModule({
  imports: [
    BrowserModule,
        DxCheckBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxButtonModule,
        DxAutocompleteModule,
        DxFormModule
  ],
  declarations: [],
  bootstrap: [RegisterComponent]
})
export class RegisterModule { }
