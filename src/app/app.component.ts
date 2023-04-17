import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {
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

//Inputs rows, columns, template
// <ng-template twoDimensionalFor
// [twoDimensionalForRows]="rows"
// [twoDimensionalForColumns]="columns"
// [twoDimensionalForTemplate]="template"
// let-rowIndex="rowIndex"
// let-columnIndex="columnIndex"
// >
// {{ rowIndex - columnIndex}}

// </ng-template>
//recive simple array and use grid for create matrix
