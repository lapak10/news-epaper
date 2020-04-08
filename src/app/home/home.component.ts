import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DailynewsService } from '../services/dailynews.service';

// export interface DayObject {
//   date: string,
//   data: Array<NewsDataObject>
// }
// export interface NewsDataObject {
//   thumbnail_url: String
//   publisher: String
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  constructor(private ns: DailynewsService) { }

  date: Date = new Date()

  newspaper: any

  ngOnInit(): void {
    this.newspaper = this.ns.fetch_daily_news()
  }

  view_paper(pdf: string) {
    window.open(pdf, '_blank');
  }

}
