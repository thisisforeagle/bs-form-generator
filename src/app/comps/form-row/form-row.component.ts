import { Component, Input, OnInit } from '@angular/core';
import { IRow } from '../../model/model';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.css'],
})
export class formRow implements OnInit {
  @Input() row: IRow;
  constructor() {}

  ngOnInit() {}
}
