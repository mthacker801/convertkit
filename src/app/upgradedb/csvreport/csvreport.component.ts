import { Component, OnInit, Injectable } from '@angular/core';
import {
  DxDataGridModule,
  DxTabsModule } from 'devextreme-angular';
import {
  DatareviewService,
  Employee,
  Tab,
  Turtle} from '../../../app/datareview.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ct-csvreport',
  templateUrl: './csvreport.component.html',
  styleUrls: ['./csvreport.component.css']
})

export class CsvreportComponent {
  dataSource: Employee[];
  turtleSource: Turtle[];
  dataTabs: Tab[];
  tabContent: Array<any>;

  constructor(service: DatareviewService) {
    this.dataTabs = service.getTabs();
    this.dataSource = service.getEmployees();
    this.turtleSource = service.getTurtles();
    this.tabContent = this.dataTabs[0].content;
}
selectTab(e) {
  this.tabContent = this.dataTabs[e.itemIndex].content;
  console.log(this.tabContent);
}

// dataItems = [
//   {
//       title: 'Personal Data',
//       itemTitleTemplate: 'tabTitle',
//       contentTemplate: 'gridItem'
//   },
// ];

}

// CompositeLink complink = new CompositeLink(new PrintingSystem());
//   PrintableComponentLink link = new PrintableComponentLink();
//   link.Component = gridControl1;
//   complink.Links.Add(link);
//   //...
//   complink.CreatePageForEachLink();
//   complink.ExportToXlsx("test.xlsx", new XlsxExportOptions() { ExportMode = XlsxExportMode.SingleFilePageByPage });
