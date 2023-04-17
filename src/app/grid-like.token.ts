import { InjectionToken } from '@angular/core';
import { GridLike } from './grid-like.interface';

export const GRID_LIKE_TOKEN = new InjectionToken<GridLike>('GridLike');
