import { Component } from '@angular/core';
import { DblistService } from '../dblist.service';
import notify from 'devextreme/ui/notify';
import {
  DxChartModule,
  DxTextBoxModule,
  DxBoxModule,
  DxDataGridModule,
  DxDataGridComponent,
  DxButtonModule,
  DxSelectBoxModule
} from 'devextreme-angular';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ct-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent {

  _dbConnData = {};
  analysisData;
  countData;
  dataIn: boolean;
  dataToDisplay: any = [];
  displayedID: string;

  constructor(private _dblistService: DblistService) {}

  // runAnalysis() {
  //   this._dblistService.runProAnalysis(this._dbConnData)
  //     .subscribe(sub => {
  //       if (sub.msg) {
  //         notify(sub.msg, 'error', 5000);
  //       } else {
  //       this.analysisData = sub;
  //       this.dataIn = true;
  //       this.getAnalysisCounts();
  //       }
  //     });
  // }
  getAnalysisCounts() {

  this.countData = [
    {'Name': 'Assets', 'Count': this.analysisData.Assets['length'], 'ID': 'Assets'},
    {'Name': 'Non-stock Parts', 'Count': this.analysisData.NonStockPartCount[0].nonStockCount, 'ID': 'NonStockPartCount'},
    {'Name': 'Parts', 'Count': this.analysisData.Parts['length'], 'ID': 'Parts'},
    {'Name': 'Unique Schedules', 'Count': this.analysisData.ScheduleList['length'], 'ID': 'ScheduleList'},
    {'Name': 'Unique Work Types', 'Count': this.analysisData.WorkTypes['length'], 'ID': 'WorkTypes'},
    {'Name': 'Work Orders', 'Count': this.analysisData.WOCount[0].woCount, 'ID': 'WOCount'},
    {'Name': 'Scheduled Work Orders', 'Count': this.analysisData.WOScheduleCount[0].woWithSchedule, 'ID': 'WOWithScheduleCount'},
    {'Name': 'Unscheduled Work Orders', 'Count': this.analysisData.WOScheduleCount[0].woWithoutSched, 'ID': 'WOWithoutSchedCount'},
    {'Name': 'Work Requests', 'Count': this.analysisData.RequestCount[0].wrCount, 'ID': 'RequestCount'},
    {'Name': 'Users', 'Count': this.analysisData.UserCount[0].userCount, 'ID': 'UserCount'},
    {'Name': 'Service Items', 'Count': this.analysisData.ServiceItemCount[0].serviceItemCount, 'ID': 'ServiceItemCount'},
    {'Name': 'Purchase Orders', 'Count': this.analysisData.POCount[0].poCount, 'ID': 'POCount'},
    ];
  }

  getDataList(data) {
    this.dataToDisplay = [];
    const ID = data.selectedRowsData[0].ID;

    this.displayedID = this.analysisData.CompanyName[0].owner + '_' + data.selectedRowsData[0].ID;

   if (ID === 'Assets') {
     this.dataToDisplay = this.analysisData.Assets;
   } else if (ID === 'NonStockPartCount') {
     this.dataToDisplay = this.analysisData.NonStockPartCount;
   } else if (ID === 'Parts') {
    this.dataToDisplay = this.analysisData.Parts;
   } else if (ID === 'ScheduleList') {
    this.dataToDisplay = this.analysisData.ScheduleList;
   } else if (ID === 'WorkTypes') {
      this.dataToDisplay = this.analysisData.WorkTypes;
   } else if (ID === 'WOCount') {
    this.dataToDisplay = this.analysisData.WOCount;
   } else if (ID === 'RequestCount') {
    this.dataToDisplay = this.analysisData.RequestCount;
   } else if (ID === 'UserCount') {
    this.dataToDisplay = this.analysisData.UserCount;
   } else if (ID === 'ServiceItemCount') {
    this.dataToDisplay = this.analysisData.ServiceItemCount;
   } else if (ID === 'POCount') {
    this.dataToDisplay = this.analysisData.POCount;
   } else {
     return;
   }
  }
}
