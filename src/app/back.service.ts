import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
export interface ICounter{
  "id": number;
  "threats":number;
  "total": number;
  "authenticated": number;
  "scored": number;
}

export interface ISession{
  "ordinal": number;
  "sessionId": number;
  "username": string;
  "authenticated": boolean;
  "fraud": boolean;
  "emulator": boolean;
  "id": number;
}


@Injectable({
  providedIn: 'root'
})

export class BackService {

  constructor(private http:HttpClient) {  
  }

  public getCounters():Observable<ICounter>{
    return this.http.get<ICounter>("http://localhost:8080/SecuredTouch/rest/v2/counters");
 
  }
  public getSessions():Observable<[ISession]>{
    return this.http.get<[ISession]>("http://localhost:8080/SecuredTouch/rest/v2/sessions");
 
  }
}
