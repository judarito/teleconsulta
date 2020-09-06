import { Component, OnInit, NgModule, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef
  public RoomId:string;
  public urlTokboxIframe:string="";
  constructor(private route: ActivatedRoute,public sanitizer: DomSanitizer) { }

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
