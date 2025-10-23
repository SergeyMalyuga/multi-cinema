import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { PopfilmComponent } from '../../features/watch-later/popfilm.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, HeroComponent, PopfilmComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
