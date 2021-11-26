import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html', 
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit{
  @Input() threat_perc=0;
  @Input() scored_perc=0; 
  @Input() authenticated_perc=0;
  
  public data: any[] = [{
    kind: 'Threats', share: 0
  }, {
    kind: 'Authenticated', share:0
  }, {
    kind: 'Scored Sessions', share: 0
  }];

  public labelContent(e: any): string {
    return e.category;
  }
  ngOnInit(): void {
  }
   ngOnChanges(changes:SimpleChanges){
     this.data[0].share = this.threat_perc;
     this.data[1].share = this.authenticated_perc;
     this.data[2].share = this.scored_perc;
     this.ngOnInit();
    //console.log(
    // this.threat_perc = changes["threat_perc"].currentValue;
    // this.authenticated_perc = changes["authenticated_perc"].currentValue;
    // this.scored_perc = changes["scored_perc"].currentValue;
    console.log("_____"+this.authenticated_perc);
    console.log("======"+this.threat_perc);
    console.log("++++"+this.scored_perc);
    // this.authenticated_perc=
    // this.scored_perc = 
    // for (const propName in changes) {
    //   const chng = changes[propName];
    //   const cur  = JSON.stringify(chng.currentValue);

    //   console.log(propName +"-->"+chng.currentValue);
    //}

    //  console.log(changes["scored_perc"]);
    //  console.log(changes["authenticated_perc"]);
   }

}


