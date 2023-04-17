import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appLet]'
})
export class LetDirective implements OnChanges {
  @Input() appLet: any;
  @Input() customTemplate: TemplateRef<any>;

  constructor(private _container: ViewContainerRef,
              private _template: TemplateRef<any>,
            ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._container.createEmbeddedView(this._template, {
      $implicit: this.appLet,
    })
  }
}
