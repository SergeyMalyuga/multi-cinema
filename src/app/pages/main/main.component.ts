import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { PopfilmComponent } from '../../features/popfilm/popfilm.component';
import { WatchLaterComponent } from '../../features/watch-later/watch-later.component';
import { NewsComponent } from '../../features/news/news.component';
import { ForumComponent } from '../../features/forum/forum.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    PopfilmComponent,
    WatchLaterComponent,
    NewsComponent,
    ForumComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
