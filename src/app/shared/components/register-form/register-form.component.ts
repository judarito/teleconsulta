import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatButtonModule} from '@angular/material'
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { DxCheckBoxModule,
         DxSelectBoxModule,
         DxNumberBoxModule,
         DxButtonModule,
         DxFormModule,
         DxAutocompleteModule,
         DxFormComponent, 
         DxListModule} from 'devextreme-angular';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  formRegister: FormGroup;
  plan1 = false;
  plan2 = false;
  plan3 = false;
  plan0 = true;

  arraySelect = [
    {text:'Plan1', value:'p1'},
    {text:'Plan2', value:'p2'},
    {text:'Plan3', value:'p3'}
  ];

  constructor(private auth: AuthService, private fb:FormBuilder, private route:Router ){
    this.crearFormulario();
  }
  crearFormulario(){
    this.formRegister = this.fb.group({
      code : ['', Validators.required],
      name : ['', Validators.required],
      email : ['', Validators.required],
      identification : ['', Validators.required],
      contactName : ['', Validators.required],
      contactEmail : ['', Validators.required],
      username : ['', Validators.required],
      password : ['', Validators.required],
      idplan : ['',Validators.required],
      active : [true],
    })
  }


  convertir(){
     if(this.formRegister.value.idplan == "p1"){
       this.plan1 = true;
       this.plan2 = false;
       this.plan3 = false;
       this.plan0 = false;
     }else if(this.formRegister.value.idplan == "p2"){
       this.plan2 = true;
       this.plan1 = false;
       this.plan3 = false;
       this.plan0 = false;
     }else if(this.formRegister.value.idplan == "p3"){
       this.plan3 = true;
       this.plan2 = false;
       this.plan1 = false;
       this.plan0 = false;
     }
     console.log(this.formRegister.value.idplan)
    
  }

  guardar(){
    if(this.formRegister.valid == true){
      console.log('validado')
      // const formjson = JSON.stringify(this.formRegister.value)  
      // console.log(formjson)
      console.log(this.formRegister.value)
      this.auth.registerCompany(this.formRegister.value).subscribe( (res) =>{
        console.log(res,'enviado');
      })
      this.route.navigate(['/login-form']);
    }else if(this.formRegister.valid == false){
      console.log('no validado')
      console.log(this.formRegister)
    }
  }

  ngOnInit() {
    console.log(this.formRegister.value.idplan)
  }

}
 
@NgModule({
  declarations:[

  ],
  imports:[
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    DxListModule,
    BrowserModule,
        DxCheckBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxButtonModule,
        DxAutocompleteModule,
        DxFormModule,
        ReactiveFormsModule,
  ],
  bootstrap: [RegisterFormComponent]
})
export class RegisterFormModule { }
