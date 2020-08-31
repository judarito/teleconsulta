import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {

  public RoomId:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.RoomId=params.id
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
