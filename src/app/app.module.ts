import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionCountersComponent } from './session-counters/session-counters.component';
import { ActiveSessionsComponent } from './active-sessions/active-sessions.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    SessionCountersComponent,
    ActiveSessionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
