import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneOnstableComponent } from './zone-onstable.component';



@NgModule({
    declarations: [
        ZoneOnstableComponent
    ],
    exports: [
        ZoneOnstableComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ZoneOnstableModule { }
