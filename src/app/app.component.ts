import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'NgContent';
  subject = new Subject<TemplateRef<any>>()
  @ViewChild('ref') ref: TemplateRef<any>

  ngAfterViewInit(): void {
    this.subject.next(this.ref)
  }
}
