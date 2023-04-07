import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveForTemplate]'
})
export class DirectiveForTemplateDirective implements OnInit {

  @Input() myTemplateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.myTemplateRef);
  }

}
