import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLetStructureDirective]'
})
export class LetStructureDirectiveDirective implements OnInit {
  @Input() appLetStructureDirective: unknown;

  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
    this.container.createEmbeddedView(this.template, {
      $implicit: this.appLetStructureDirective
    })
  }
}
