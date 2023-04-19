import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AttributeDirectivesComponent {
  condition = false;
  title = 'NgContent';
}
