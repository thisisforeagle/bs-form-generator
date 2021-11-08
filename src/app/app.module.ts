import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormGenComponent } from './comps/form-gen/form-gen.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FormGenComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
