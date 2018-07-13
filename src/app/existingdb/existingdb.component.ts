import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';
import { DblistService } from '../dblist.service';

export class Existdb {
  constructor(public name: string) { }
}

@Component({
  templateUrl: './existingdb.component.html',
  styleUrls: ['./existingdb.component.css']
})
export class ExistingdbComponent implements OnInit {
  DBProControl = new FormControl();
  pick = [
    new Existdb('Mplus'),
    new Existdb('JTS'),
    new Existdb('Speedway')
  ];

  filteredOptions: Observable<Existdb[]>;

constructor(private _dblistService: DblistService) {}

  ngOnInit() {
    this.filteredOptions = this.DBProControl.valueChanges
      .pipe(
        startWith<string | Existdb>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.pick.slice())
      );
  }

  filter(name: string): Existdb[] {
    return this.pick.filter(pick =>
      pick.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(existdb?: Existdb): string | undefined {
    return existdb ? existdb.name : undefined;
  }
}
