import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  condition = false;
  title = 'NgContent';
  nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  subject = new Subject<TemplateRef<any>>()
  @ViewChild('ref') ref: TemplateRef<any>

  ngAfterViewInit(): void {
    this.subject.next(this.ref)
  }
}
