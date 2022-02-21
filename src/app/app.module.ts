import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModuleModule} from './shared-module/shared-module.module';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    NgbModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
