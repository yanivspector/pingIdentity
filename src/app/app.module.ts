import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionCountersComponent } from './session-counters/session-counters.component';
import { ActiveSessionsComponent } from './active-sessions/active-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionCountersComponent,
    ActiveSessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
