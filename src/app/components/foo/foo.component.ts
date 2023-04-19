import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';


@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooComponent {
  @Input()
  template?: TemplateRef<{ $implicit: number }>
}
