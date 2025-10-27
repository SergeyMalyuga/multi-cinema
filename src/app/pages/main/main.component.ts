import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { PopfilmComponent } from '../../features/popfilm/popfilm.component';
import { WatchLaterComponent } from '../../features/watch-later/watch-later.component';
import { NewsComponent } from '../../features/news/news.component';
import { ForumComponent } from '../../features/forum/forum.component';
import { MemberShipComponent } from '../../features/member-ship/member-ship.component';

@Component({
  selector: 'app-main',
  imports: [
    HeaderComponent,
    HeroComponent,
    PopfilmComponent,
    WatchLaterComponent,
    NewsComponent,
    ForumComponent,
    MemberShipComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
