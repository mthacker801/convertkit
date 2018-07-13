import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import './rxjs-extensions';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
 } from '@angular/material';
 import { MatCheckboxModule } from '@angular/material/checkbox';
 import {
  DxBoxModule,
  DxButtonModule,
  DxChartModule,
  DxCheckBoxModule,
  DxFileUploaderModule,
  DxFormModule,
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTabPanelModule,
  DxTabsModule
} from 'devextreme-angular';
 // Imports for loading & configuring the in-memory web api

//  import * as FileSaver from 'file-saver';
//  import * as XLSX from 'xlsx';

import { AppComponent } from './app.component';
import { UpgradedbComponent } from './upgradedb/upgradedb.component';
import { ConnectdbComponent } from './shared/connectdb/connectdb.component';
import { FixproComponent } from './fixpro/fixpro.component';
import { NewdbComponent } from './newdb/newdb.component';
import { LoadfileComponent } from './shared/loadfile/loadfile.component';
import { CsvreportComponent } from './upgradedb/csvreport/csvreport.component';
import { FileformatComponent } from './shared/fileformat/fileformat.component';
import { ExistingdbComponent } from './existingdb/existingdb.component';
import { EvalComponent } from './shared/eval/eval.component';
import { AnalyzeComponent } from './upgradedb/analyze.component';
import { DblistService } from './dblist.service';
import { DatareviewService } from './datareview.service';
import { SpinnerComponent } from '../app/shared/spinner/spinner.component';
import { SpinnerService } from '../app/shared/spinner/spinner.service';
import { ConnService } from './shared/services/conn.service';
// import { CsvreportComponent } from '../app/upgradedb/csvreport/csvreport.component';

const appRoutes: Routes = [
  { path: 'upgradedb', component: UpgradedbComponent },
  { path: 'newdb', component: NewdbComponent },
  { path: 'existingdb', component: ExistingdbComponent },
  { path: '', redirectTo: 'upgradedb', pathMatch: 'full' },
  { path: '**', redirectTo: 'upgradedb', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UpgradedbComponent,
    ConnectdbComponent,
    FixproComponent,
    NewdbComponent,
    LoadfileComponent,
    FileformatComponent,
    ExistingdbComponent,
    EvalComponent,
    AnalyzeComponent,
    CsvreportComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxBoxModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxTabPanelModule,
    DxTabsModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatAutocompleteModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DxFileUploaderModule,
    // FileSaver,
    // XLSX
  ],
  exports: [SpinnerComponent],
  providers: [
    ConnService, DblistService, DatareviewService, SpinnerService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);
