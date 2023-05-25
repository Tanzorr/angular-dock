import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch2',
  templateUrl: './branch2.component.html',
  styleUrls: ['./branch2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Branch2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triggerChangeDetection() {
    return Math.random()*100;
  }

  displayChanges() {

  }
}
