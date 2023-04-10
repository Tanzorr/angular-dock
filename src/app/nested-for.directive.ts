import { Directive, ElementRef, Input, OnChanges, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgLoop]'
})
export class NestedForDirective implements OnChanges {
  @Input() appNgLoopOf: Array<any>;

  @Input() appNgLoopNestedTemplate: TemplateRef<any>;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
              private element: ElementRef,
              private renderer: Renderer2
  ) {
  }

  ngOnChanges() {
    this.container.clear();
    this._getArrayTemplate(this.appNgLoopOf, this.appNgLoopNestedTemplate);

    this.renderer.setStyle(this.element.nativeElement.parentElement, 'display', 'grid');
    this.renderer.setStyle(this.element.nativeElement.parentElement, 'grid-template-columns', `repeat(${this.appNgLoopOf[0].length}, 1fr)`);
  }

  public _getArrayTemplate(array: any[], template: TemplateRef<any>): void {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        this.container.createEmbeddedView(template, {
          $implicit: array[i][j],
          row: i,
          column: j
        });
      }
    }
  }
}
