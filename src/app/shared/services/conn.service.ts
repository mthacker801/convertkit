import { Injectable, EventEmitter, } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IConnect } from '../../connection';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';

@Injectable ()
export class ConnService {

    endpoint = environment.path;
    private dbConn = 'conn';
    private _dbConnData = new BehaviorSubject(undefined);
    cast = this._dbConnData.asObservable();

    constructor(private _http: HttpClient) {}

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

}

