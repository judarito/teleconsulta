import { Component, OnInit, NgModule } from '@angular/core';
import {  DxLoadPanelModule } from 'devextreme-angular';
import { LoaderService } from '../../services/loader.service';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
public loadingVisible: true;
public isLoading : Subject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loadingVisible=true
  }

}
@NgModule({
  imports: [
    CommonModule,
    DxLoadPanelModule
  ],
  declarations: [ LoaderComponent ],
  exports: [ LoaderComponent ]
})
export class LoaderModule { }
