import { Component, OnInit } from '@angular/core';
import { BackService, ISession } from '../back.service';

@Component({
  selector: 'app-active-sessions',
  templateUrl: './active-sessions.component.html',
  styleUrls: ['./active-sessions.component.css']
})
export class ActiveSessionsComponent implements OnInit {

 sessions:ISession[]=[];
 constructor(private backService:BackService) {
  this.getSessions();
  setInterval(() => {
    this.getSessions();
  }, 3000);
  
 }

ngOnInit(): void {
}
getSessions(){
  this.backService.getSessions().subscribe((sessions) => {
   this.sessions = sessions;
  },
  error=>console.error("Error on Get Sessions",error)
  );
}

}
