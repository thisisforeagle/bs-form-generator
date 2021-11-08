import { Component, Input, OnInit } from '@angular/core';
import { IColumn } from '../../model/model';

@Component({
  selector: 'app-form-row-column',
  templateUrl: './form-row-column.component.html',
  styleUrls: ['./form-row-column.component.css'],
})
export class formRowColumn implements OnInit {
  @Input() column: IColumn;
  constructor() {}

  ngOnInit() {}
}
