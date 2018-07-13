import { Component, OnInit, Input, Output } from '@angular/core';
import { IDatabase } from '../../database';
import { IVersion } from '../../versions';
import { DblistService } from '../../dblist.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ct-connectdb',
  templateUrl: './connectdb.component.html',
  styleUrls: ['./connectdb.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class ConnectdbComponent implements OnInit {
  _dbConnData = {};
  dbNames = [];
  @Input()
  dbList: IDatabase[];
  verList: IVersion[];


  constructor(private _dblistService: DblistService) {}

  ngOnInit() { 
  }

  showDbList() {
    this._dblistService.getDbList(this._dbConnData)
    .subscribe(sub => {
        this.dbList = <IDatabase[]>sub;
    });
  }

  // showDbVersions() {
  //   this._dblistService.getVersionList(this._dbConnData)
  //   .subscribe(sub => { this.verList = <IVersion[]>sub;
  //   });
  // }

  // findDbList() {
  //   this._dblistService.getDbList(this._dbConnData)
  //   .subscribe(sub => {
  //       this.dbList = <IDatabase[]>sub;
  //   });
  }

  // this._dblistService.dbData.subscribe((list = []) => {
  //   setTimeout(() => {
  //     // set list
  //     this.dbNames = list;
  //     // pull the data
  //     this.showDbList();
  //   }, 1500);
  // });

  // this._dblistService.loadAllDbs(this._dbConnData);