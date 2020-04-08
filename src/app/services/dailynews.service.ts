import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DailynewsService {
  data_json_url = 'https://raw.githubusercontent.com/lapak10/news-epaper/master/src/app/services/data.json'


  constructor(private http: HttpClient) { }

  fetch_daily_news() {
    return this.http.get(this.data_json_url).toPromise()
  }
}
