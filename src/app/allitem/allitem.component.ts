import { Component, Injectable } from '@angular/core';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-allitem',
  templateUrl: './allitem.component.html',
  styleUrls: ['./allitem.component.css']
})
@Injectable({

  providedIn: 'root'
})
export class AllitemComponent {
  tableData: any;
  dataSource: any[] = [];
  title = 'ag-test';
  tabcontent: any;
  tableDataStore: [] = [];
  displayedColumns: string[] = ['select', 'id', 'city', 'state'];

  onRowClicked(row: any) {
    this._tabledataservice.savedDataEvent(row);
    console.log(row);
  }
  constructor(private _tabledataservice: TableDataService) {

    this.tableData = this._tabledataservice.tabContent().subscribe((data) => {
      this.tableDataStore = data.response.venues.map((venue: any) => {
        return {
          id: venue.id,
          city: venue.location.city,
          state: venue.location.state
        }
      });
      this.dataSource = this.tableDataStore;
      console.log("DATA", this.tableDataStore);
    },);
  }
}
