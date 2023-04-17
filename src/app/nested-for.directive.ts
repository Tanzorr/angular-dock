import { Directive, ElementRef, Input, OnChanges, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { GridLike } from './grid-like.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GRID_LIKE_TOKEN } from './grid-like.token';

@Directive({
  selector: '[appNestedFor]',
  providers: [
    { provide: GRID_LIKE_TOKEN, useExisting: NestedForDirective }
  ]
})
export class NestedForDirective implements OnChanges, GridLike {
  private _columnsSubject = new BehaviorSubject<number | null>(null);
  columns$: Observable<number | null> = this._columnsSubject.asObservable();

  @Input() appNestedForOf: number;
  @Input() appNestedForWith: number;

  @Input() appNestedForTemplate: TemplateRef<any>;

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>,
              private element: ElementRef,
              private renderer: Renderer2
  ) {
  }

  ngOnChanges() {
    this.container.clear();
    this._getArrayTemplate(this.appNestedForOf, this.appNestedForWith,this.appNestedForTemplate ?? this.template);

    this._columnsSubject.next(this.appNestedForWith);
  }

  public _getArrayTemplate(rows: number, columns: number, template: TemplateRef<unknown>): void {
    let index = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.container.createEmbeddedView(template, {
          $implicit: index++,
          row: i,
          column: j
        });
      }
    }
  }
}
