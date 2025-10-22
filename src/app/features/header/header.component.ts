import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollDirective } from './directives/scroll-directive';

@Component({
  selector: 'app-header',
  imports: [ScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
