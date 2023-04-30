import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneRunComponent } from './zone-run.component';



@NgModule({
    declarations: [
        ZoneRunComponent
    ],
    exports: [
        ZoneRunComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ZoneRunModule { }
