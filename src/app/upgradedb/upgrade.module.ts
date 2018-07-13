import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

import { FixproComponent } from '../fixpro/fixpro.component';
import { ConnectdbComponent } from '../shared/connectdb/connectdb.component';
import { AnalyzeComponent } from './analyze.component';
import { UpgradedbComponent } from './upgradedb.component';
import { CsvreportComponent } from './csvreport/csvreport.component';

//import { DatareviewService } from '../datareview.service';
import { AppModule } from '../app.module';


// import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    AppModule,
    Angular2Csv
  ],
  declarations: [
    ConnectdbComponent,
    FixproComponent,
    UpgradedbComponent,
    AnalyzeComponent,
    CsvreportComponent
  ],
  providers: [
    // DatareviewService
  ]
})
export class UpgradeModule { }
