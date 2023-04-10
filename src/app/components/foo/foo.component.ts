import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AppComponent } from "../../app.component";
import { delay, Observable } from "rxjs";

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {
  @Input()
  template?: TemplateRef<{ $implicit: number }>



}
