import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-change-detection-strategey',
  templateUrl: './change-detection-strategies.component.html',
  styleUrls: ['./change-detection-strategies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategiesComponent implements OnInit {
  food: any;

  constructor() { }

  ngOnInit(): void {
  }

}
