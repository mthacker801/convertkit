import { Component, OnInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { DblistService } from './dblist.service';
import { IDatabase } from './database';
import { IConnect } from './connection';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ct-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  DblistService: any;
  title = 'Conversion Toolkit';
  dblist: Observable<IDatabase[]>;
  dbconn: Observable<IConnect[]>;
  _dbConnData = {};

  constructor(private dblistService: DblistService) {}

  ngOnInit() {
  }
}
