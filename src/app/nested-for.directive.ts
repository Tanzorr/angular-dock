import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNestedFor]'
})
export class NestedForDirective {
  @Input() set nestedForOf(nestedArrays: any[][]) {
    // clear the container before rendering the new content
    this.viewContainer.clear();

    // loop through the nested arrays and render the template for each element
    nestedArrays.forEach((nestedArray: any[]) => {
      nestedArray.forEach((item: any) => {
        // create a new embedded view for the template
        const embeddedView = this.templateRef.createEmbeddedView({ $implicit: item });
        this.viewContainer.insert(embeddedView);
      });
    });
  }


  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
