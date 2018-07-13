import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DblistService } from '../dblist.service';
import { ConnService } from '../../app/shared/services/conn.service';
import { IDatabase } from '../database';
import { IVersion } from '../versions';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { ConnectdbComponent } from '../shared/connectdb/connectdb.component';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import notify from 'devextreme/ui/notify';


@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './upgradedb.component.html',
  styleUrls: ['./upgradedb.component.css']
})

export class UpgradedbComponent implements OnInit {

  @Input()
    dbList: IDatabase[];
    subscription: Subscription;
// create variables to be used in component and HTML
  private sub: Subscription;
  errorMessage: string;
  data = {};
  DBDeskControl = new FormControl();
  option: any;
  pick: string;
  databaseForm: FormGroup;
  _dbConnData = {};


  @Output()
  dbNames = this.showDbList();

  // Inject
constructor(private fb: FormBuilder,
            private route: ActivatedRoute,
            private router: Router,
            private _dblistService: DblistService) {}

ngOnInit() {}

    // getDbNames() {
    //   this.sub = this._dblistService(this.data).getDbList()
    //   .sub(dbList => { this.dbList = dbList; });
      // this.dbList = this._dblistService.getDbList(this.data);
      // .subscribe(dbNames => this.dbList = dbNames,
      // error => this.errorMessage = <any>error);
    // }
// create method to display DB list.
      showDbList() {
      this._dblistService.getDbList(this._dbConnData)
      }
    }

    // useConnData() {
    //   if(_dbConnData.isEmpty()) {
    //     ''
    //   } else {
    //     return
    //   }
    // }
}
