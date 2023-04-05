import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
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
  temp$: Observable<TemplateRef<any>>
 // @ContentChild('ref') temp: TemplateRef<any>;

  constructor( private _parent: AppComponent ) {
     this.temp$ = this._parent.subject.asObservable().pipe(delay(0));
  }
}
