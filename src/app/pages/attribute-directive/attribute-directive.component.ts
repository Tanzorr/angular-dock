import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeDirectiveComponent {
}
