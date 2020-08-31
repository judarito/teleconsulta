import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { callSessionService } from 'src/app/httpServices/callSession/callSession.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-externallogin',
  templateUrl: './externallogin.component.html',
  styleUrls: ['./externallogin.component.scss']
})
export class ExternalloginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
     private callsessionservice:callSessionService,
     private router: Router) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.callsessionservice.getcallSession(params.id).subscribe(res=>{
          console.log(res);
          if(res){         
            localStorage.setItem("jwt", res.jwt);
            this.router.navigate(['/video/',  params.id ]);
          }
        },(error:any)=>{
          console.log(error);
          notify(error.message,"error",2000);
        });
    });
  }

}
@NgModule({
  imports: [
     ],
  declarations: [],
  bootstrap: [ExternalloginComponent]
})
export class ExternalloginModule { }
