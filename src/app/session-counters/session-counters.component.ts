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
  percentage_threats = 0;
  percentage_scored = 0;
  percentage_auth = 0;
  total = 0;

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
      this.total = this.threats + this.authenticated +  this.scored_sessions;
      this.percentage_auth = this.authenticated / this.total;
      this.percentage_scored = this.scored_sessions / this.total;
      this.percentage_threats = this.threats / this.total;
    },
    error=>console.error("Error on Get Counters",error)
    );
  }
}
