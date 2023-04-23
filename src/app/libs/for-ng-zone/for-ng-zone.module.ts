import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForNgZoneComponent } from './for-ng-zone.component';



@NgModule({
    declarations: [
        ForNgZoneComponent
    ],
    exports: [
        ForNgZoneComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ForNgZoneModule { }
