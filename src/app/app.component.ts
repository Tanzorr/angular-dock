import { AfterViewInit, ChangeDetectionStrategy, Component, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

interface navItem {
  path: string;
  label: string;
}

const navs = [
  {
    path: '/attribute-directives',
    label: 'Attribute Directives'
  },
  {
    path: '/carousel-directive',
    label: 'Carousel Directive'
  },
  {
    path: '/reference-variables',
    label: 'Reference Variables'
  },
  {
    path: '/structure-directive',
    label: 'Structure Directive'
  },
  {
    path: '/ng-content',
    label: 'NgContent'
  },
  {
    path: '/change-detection-strategies',
    label: 'Change Detection Strategies'
  },
  {
    path: '/zone-js',
    label: 'Zone.js'
  },
  {
    path: '/event-loop',
    label: 'Event Loop'
  },
  {
    path: '/dependency-injection',
    label: 'Dependency Injection'
  }
]


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  navs: navItem[] = navs;

  subject = new Subject<TemplateRef<any>>()
  @ViewChild('ref') ref: TemplateRef<any>
  columns: number = 1;

  ngAfterViewInit(): void {
    this.subject.next(this.ref)
  }
}
