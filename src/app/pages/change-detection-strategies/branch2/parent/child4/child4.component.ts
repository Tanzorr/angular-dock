import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerChangeDetection() {
    return Math.random()*100;
  }

}
