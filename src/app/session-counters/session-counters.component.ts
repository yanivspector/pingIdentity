import { Component, OnInit } from '@angular/core';
import { BackService } from '../back.service';


@Component({
  selector: 'app-session-counters',
  templateUrl: './session-counters.component.html',
  styleUrls: ['./session-counters.component.css']
})
export class SessionCountersComponent implements OnInit {

  threats = 0;
  total_sessions = 0;
  authenticated = 0;
  scored_sessions = 0;

  constructor(private backService:BackService) {
    this.getCounters();
    setInterval(() => {
      this.getCounters();
    }, 3000);
    
   }

  ngOnInit(): void {
  }
  getCounters(){
    this.backService.getCounters().subscribe((counters) => {
      this.threats = counters.threats;
      this.total_sessions = counters.total;
      this.authenticated = counters.authenticated;
      this.scored_sessions = counters.scored;
    },
    error=>console.error("Error on Get Counters",error)
    );
  }
}
