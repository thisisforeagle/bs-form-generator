import { Component, VERSION } from '@angular/core';
import { IBSForm } from './model/model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  form: IBSForm = {
    rows: [
      {
        class: 'mb-2',
        columns: [
          {
            class: 'col-sm-6',
          },
          {
            class: 'col-sm-6',
          },
        ],
      },
      {
        class: 'mb-2',
        columns: [
          {
            class: 'col-sm-6',
          },
          {
            class: 'col-sm-6',
          },
        ],
      },
    ],
  };
}
