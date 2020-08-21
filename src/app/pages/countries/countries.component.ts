import { Component, NgModule, ViewChild } from '@angular/core';
import { CountriesService } from '../../httpServices/countries/countries.service';
import { CountriesResponseModel } from '../../models/countries/countriesModel';
import notify from 'devextreme/ui/notify';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import repaintFloatingActionButton from 'devextreme/ui/speed_dial_action/repaint_floating_action_button';


@Component({
    templateUrl: 'countries.component.html'
  })

  export class CountriesComponent {
    countries:CountriesResponseModel[];
    @ViewChild(DxDataGridComponent, { static: false }) grid: DxDataGridComponent;
    constructor(private countriesService: CountriesService){
      this.countriesService.getCountries().subscribe((res)=>{
        this.countries=res;
      },(Err:any)=>{
        console.log(Err);
        notify(Err.message,"error",2000);
      })
    }
    addRow() {
      this.grid.instance.addRow();
      this.grid.instance.deselectAll();
  }
  }
  @NgModule({
    imports: [
        DxDataGridModule
    ],
    declarations: [],
    bootstrap: [CountriesComponent]
})
export class CountriesModule { }