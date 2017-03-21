import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GetServiceService } from './get-service.service';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { JournalListPageComponent } from './journal-list-page/journal-list-page.component';
import { JournalDetailPageComponent } from './journal-detail-page/journal-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    JournalListPageComponent,
    JournalDetailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
