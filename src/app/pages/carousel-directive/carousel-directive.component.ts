import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { CarouselDirective } from '../../libs/carousel/carousel.directive';

@Component({
  selector: 'app-carousel-directive',
  templateUrl: './carousel-directive.component.html',
  styleUrls: ['./carousel-directive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselDirectiveComponent implements OnInit, AfterViewInit{
  alertValue: string | undefined;
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @ViewChild('alert') alert: ElementRef | undefined;
  @ViewChildren('carousel') carousel: QueryList<CarouselDirective> | undefined;

  ngAfterViewInit(): void {
    console.log('carousel', this.carousel);
  }

  ngOnInit(): void {
  }
}
