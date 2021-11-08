import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormGenComponent } from './comps/form-gen/form-gen.component';
import { formRow } from './comps/form-row/form-row.component';
import { formRowColumn } from './comps/form-row-column/form-row-column.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FormGenComponent, formRow, formRowColumn],
  bootstrap: [AppComponent],
})
export class AppModule {}
