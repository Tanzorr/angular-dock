import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.scss']
})
export class StructureDirectivesComponent {

  condition = false;

  title = 'NgContent';
  numbers = [ 1, 2, 3 ];
  nestedArray = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ];
  greeting = 'Hello, world!';

  subject = new Subject<TemplateRef<any>>()
  @ViewChild('ref') ref: TemplateRef<any>
  columns: number = 1;
  rows: number = 1;
  rows1: number = 1;
  columns1: number = 1;


  ngAfterViewInit(): void {
    this.subject.next(this.ref)
  }


}
