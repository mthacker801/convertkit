import { Injectable, Input, Output, OnInit, OnChanges, EventEmitter, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { IDatabase } from './database';
import { IVersion } from './versions';
import { IConnect } from './connection';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../src/environments/environment';
import { SpinnerService } from './shared/spinner/spinner.service';
import { tap, catchError } from 'rxjs/operators';


@Injectable()
export class DblistService {

    endpoint = environment.path;
    verList: IVersion[];
    dbList: IDatabase[];

    // Observable Object/Array Source
    dbData: Subject<Array<IDatabase>> = new BehaviorSubject<Array<IDatabase>>([]);

     // Observable Object/Array stream
    // cast = this.dbData.asObservable();

    constructor(private _http: HttpClient) {

    }

    // loadAllDbs(dbConn) {
    //     this._http.get(this.endpoint + '/dbs', dbConn).map((res: any) => {
    //         return res.json();
    //     }).subscribe((data: any) => {
    //         this.dbData.next(data);
    //     },
    //     (err: any) => console.error('loadAllDbs: ERROR'),
    //     () => console.log('loadAllDbs: always'));
    // }
    // Create new function with one parameter dbConn.  Set it to Database Template.
    // Post Connection Data to Server using Database Templete.
    // The server endpoint is stored and we supply that endpoint with Connection info.
    // We then create a new array using a new function called conn and we set results to conn.
    getDbList(dbConn): Observable < IDatabase[] > {
        return this._http.post<IDatabase[]>(this.endpoint + '/dbs', dbConn);
    }

    // tryConn(connData): Observable < IConnect[] > {
    //     console.log(connData);
    //     this._http.post<any>(this.endpoint + '/dbs', connData)
    //     .subscribe(res => {
    //      this.saveConn(res.conn);
    //     });

    //     return this._http.post<IConnect[]>(this.endpoint + '/dbs', connData).map(
    //         conn => conn,
    //     );
    // }

    // saveConn(conn) {
    //     if (res.conn[length]) {
    //     localStorage.setItem(this.dbConn, conn);
    //     } else {
    //         console.log(Error);
    //     }
    // }

    // getVersionList(data): Observable < IVersion[] > {
    //     return this._http.post<IVersion[]>(this.endpoint + '/ver', data);
    // }


    // getDbData(name: string): Observable<IConnect[]> {
    //     if (this.dbConn) {
    //         return this.dbConn;
    //     }
    //     return this._http.get<IConnect[]>(this.dbConn)
    //         .pipe(
    //             tap(data => console.log(JSON.stringify(data))),
    //             tap(data => this.dbConn = data),
    //             catchError(this.handleError)
    //         );
    // }

    // private handleError(error: Response) {
    //     const msg = `Status code ${error.status} on url ${error.url}`;
    //     console.error(msg);
    //     return Observable.throw(msg);
    // }

    // runPreAnalysis(data) {
    //     return this._http.post<any>(this.endpoint + '/analysis/getPreAnalysis', data);
    //   }
}
