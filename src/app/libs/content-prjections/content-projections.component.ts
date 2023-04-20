import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-content-projections',
  templateUrl: './content-projections.component.html',
  styleUrls: ['./content-projections.component.scss']
})
export class ContentProjectionsComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
