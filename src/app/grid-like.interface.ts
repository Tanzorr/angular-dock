import { Observable } from 'rxjs';

export interface GridLike{
  columns$: Observable<number | null>;
}
