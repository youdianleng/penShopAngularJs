import { Component } from '@angular/core';
import { DailyNoticeComponent } from './daily-notice/daily-notice.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule} from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DailyNoticeComponent,HeaderComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

}
