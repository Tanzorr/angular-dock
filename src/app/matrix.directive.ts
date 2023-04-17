import { AfterContentInit, ContentChild, Directive, HostBinding, OnDestroy } from '@angular/core';
import { GridLike } from './grid-like.interface';
import { GRID_LIKE_TOKEN } from './grid-like.token';
import { Subject, takeUntil } from 'rxjs';


@Directive({
  selector: 'app-matrix, [appMatrix]'
})
export class MatrixDirective implements AfterContentInit, OnDestroy{
  private _destroySubject = new Subject<void>();

  @ContentChild(GRID_LIKE_TOKEN) gridLike: GridLike

  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-columns') gridTemplateColumns = `repeat(auto-fill, 1fr)`;

  constructor() { }

  ngAfterContentInit(): void {
    this.gridLike.columns$.pipe(
      takeUntil(this._destroySubject)
    ).subscribe((columns) => {
      this.gridTemplateColumns = `repeat(${columns ?? 'auto-fill' }, 1fr)`;
    })
  }

  ngOnDestroy(): void {
    this._destroySubject.next();
    this._destroySubject.complete();
  }

}
