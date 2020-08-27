import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-videocall',
  templateUrl: './videocall.component.html',
  styleUrls: ['./videocall.component.scss']
})
export class VideocallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [
     ],
  declarations: [],
  bootstrap: [VideocallComponent]
})
export class VideocallModule { }
