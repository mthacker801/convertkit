import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DblistService } from '../dblist.service';
import { IDatabase } from '../database';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import notify from 'devextreme/ui/notify';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ct-fixpro',
  templateUrl: './fixpro.component.html',
  styleUrls: ['./fixpro.component.css']
})
export class FixproComponent implements OnInit {

  _dbConnData = {};
  dbList: IDatabase[];
  DBProControl = new FormControl();
  filteredOptions: Observable<IDatabase[]>;
  dbs: any;
  proAnalysisData;
  countData;

constructor(private _dblistService: DblistService) {}

  ngOnInit() {
    // this._dblistService.refresh();
    this.showDbList();
  }

    showDbList() {
      this._dblistService.getDbList(this._dbConnData);
      // .subscribe(sub => { this.dbList = <IDatabase[]>sub;
        // console.log(JSON.stringify(this.dblist));
      // });
    }

    getAnalysisCounts() {
      if (this.proAnalysisData.runFix) {
        const logsName = 'Fixes Needed - Logs';
        const vendorName = 'Fixes Needed - Vendors';
        const scheduleName = 'Fixes Needed - Schedule Resets';
        notify('Running analysis only for: ' + this.proAnalysisData.CompanyName[0].owner, 'info', 2000);
      } else {
        const logsName = 'Fixes Needed - Logs';
        const vendorName = 'Fixes Needed - Vendors';
        const scheduleName = 'Fixes Needed - Schedule Resets';
        notify('Running analysis only for: ' + this.proAnalysisData.CompanyName[0].owner, 'info', 2000);
      }

      // this.countData = [
      //   {'Name': logsName, 'Count': this.proAnalysisData.BadLogsUpdated, 'ID': 'BadLogsUpdated'},
      //   {'Name': vendorName, 'Count': this.proAnalysisData.UpdateBadVendor, 'ID': 'UpdateBadVendor'},
      //   {'Name': scheduleName, 'Count': this.proAnalysisData.UpdateScheduleReset, 'ID': 'UpdateScheduleReset'},
      //   ];
  }

  // create popup identifying how many fixes there were, number of attachements
}
