import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneJsComponent } from './zone-js.component';
import { ZoneJsRoutingModule } from './zone-js-routing.module';
import { ForNgZoneModule } from '../../libs/for-ng-zone/for-ng-zone.module';
import {ZoneRunModule} from "./zone-run/zone-run.module";
import {ZoneOnstableModule} from "./zone-onstable/zone-onstable.module";



@NgModule({
  declarations: [
    ZoneJsComponent
  ],
    imports: [
        CommonModule,
        ZoneJsRoutingModule,
        ForNgZoneModule,
        ZoneRunModule,
        ZoneOnstableModule
    ]
})
export class ZoneJsModule { }
