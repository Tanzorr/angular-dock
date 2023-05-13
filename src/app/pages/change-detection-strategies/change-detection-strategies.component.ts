import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-strategey',
  templateUrl: './change-detection-strategies.component.html',
  styleUrls: ['./change-detection-strategies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStrategiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
