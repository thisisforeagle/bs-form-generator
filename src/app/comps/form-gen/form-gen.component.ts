import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IBSForm } from '../../model/model';

@Component({
  selector: 'app-form-gen',
  templateUrl: './form-gen.component.html',
  styleUrls: ['./form-gen.component.css'],
})
export class FormGenComponent implements OnInit {
  @Input() data: IBSForm;

  constructor() {}

  ngOnInit() {
    console.log(this.data);
  }
}
