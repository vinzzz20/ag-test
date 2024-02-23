import { Component } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-saveditem',
  templateUrl: './saveditem.component.html',
  styleUrls: ['./saveditem.component.css']
})
export class SaveditemComponent {
  getDataEventSubscription: Subscription;
  dataSource: [] = [];
  data = JSON.parse(window.localStorage.getItem("savedData") ?? "[]");
  row: any;
  displayedColumns: any[] = ['id', 'city', 'state'];



  constructor(private getDataService: TableDataService) {
    if (window.localStorage.getItem('savedData') === null) {
      window.localStorage.setItem('savedData', JSON.stringify([]));

    }
    this.getDataEventSubscription = this.getDataService.getDataEvent()
      .subscribe(
        row => {
          const items = JSON.parse(window.localStorage.getItem("savedData") ?? '[]');
          items.push(row);
          window.localStorage.setItem("savedData", JSON.stringify(items));
          this.data = items;
        });
    this.dataSource = this.data;
    console.log("Saved", this.data);

  }

}


