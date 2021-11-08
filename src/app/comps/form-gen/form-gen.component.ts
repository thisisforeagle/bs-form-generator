import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBSForm } from '../../model/model';

@Component({
  selector: 'app-form-gen',
  templateUrl: './form-gen.component.html',
  styleUrls: ['./form-gen.component.css'],
})
export class FormGenComponent implements OnInit {
  @Input() data: IBSForm;
  @ViewChild('formoutput') formoutput: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }

  addRow() {
    console.log('Adding row');
  }

  addColumn() {
    console.log('Adding column');
  }

  outputForm() {
    console.log(this.formoutput.nativeElement);
  }
}
