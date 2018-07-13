import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DblistService } from '../dblist.service';

@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './newdb.component.html',
  styleUrls: ['./newdb.component.css']
})
export class NewdbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
