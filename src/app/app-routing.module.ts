import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveSessionsComponent } from './active-sessions/active-sessions.component';
import { SessionCountersComponent } from './session-counters/session-counters.component';

const routes: Routes = [
  {
    path:'active-sessions',
    component: ActiveSessionsComponent
  },
  {
    path:'session-counters',
    component: SessionCountersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
