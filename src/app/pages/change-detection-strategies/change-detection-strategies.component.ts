import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { trigger } from '@angular/animations';
import { RandomBackgroundDirective } from '../../libs/random-background/random-background.directive';

@Component({
  selector: 'app-change-detection-strategey',
  templateUrl: './change-detection-strategies.component.html',
  styleUrls: ['./change-detection-strategies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategiesComponent implements OnInit {
  food: any;

  @ViewChild('appRandomBackground') appRandomBackground: RandomBackgroundDirective | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  triggerChangeDetection() {
    this.appRandomBackground?.changeBackground()
    return Math.random()*100;
  }
}
