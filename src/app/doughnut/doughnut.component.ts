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

  public _reload = true;

  private reload() {
      setTimeout(() => this._reload = false);
      setTimeout(() => this._reload = true);
  }

  ngOnChanges(changes:SimpleChanges){  
    this.ngOnInit();
    this.reload();
  }
  ngOnInit(): void {
    this.data[0].share = this.threat_perc;
    this.data[1].share = this.authenticated_perc;
    this.data[2].share = this.scored_perc;
    console.log("_____"+this.authenticated_perc);
    console.log("======"+this.threat_perc);
    console.log("++++"+this.scored_perc);   
  }
   

}


function ngOnChanges(changes: any, SimpleChanges: any) {
  throw new Error('Function not implemented.');
}

