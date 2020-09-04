import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {

  public RoomId:string;
  public urlTokboxIframe:string="";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.RoomId=params.id
      this.urlTokboxIframe=`https://tokbox.com/embed/embed/ot-embed.js?embedId=3b0e2358-bf4c-4738-a2c6-f8e9bbd1c776&room=${this.RoomId}&iframe=true`
   });
  }

}

@NgModule({
  imports: [
     ],
  declarations: [],
  bootstrap: [VideocallComponent]
})
export class VideocallModule { }
