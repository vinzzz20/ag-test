import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableDataService {
  private _url: string = "https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&oauth_token=NPKYZ3WZ1VYMNAZ2FLX1WLECAWSMUVOQZOIDBN53F3LVZBPQ&v=20180616";
  private subject = new Subject<any>();
  private row: [] = [];
  constructor(private http: HttpClient) { }
  savedDataEvent(row: []) {
    this.subject.next(row);
  }
  getDataEvent(): Observable<any> {
    return this.subject.asObservable();
  }
  menuTabLable() {
    return [
      { lable: "All Matches" },
      { lable: "Saved Matches" }
    ]
  }
  tabContent(): Observable<any> {
    return this.http.get(this._url);
  }
}
