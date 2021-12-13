import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SessionData } from '../models/session-data.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { GeneralData } from '../config/general-data';
import { LocalstorageService } from './localstorage.service';
import { UserCredentials } from '../models/user-credentials.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionDataSubject: BehaviorSubject<SessionData>= new BehaviorSubject<SessionData>(new SessionData());
  url: string = GeneralData.ADMIN_USERS_URL;


  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) {
    this.IsThereActiveSession();
   }

   IsThereActiveSession(){
     let data = localStorage.getItem('session-data');
     if(data){
       let objectData: SessionData = JSON.parse(data);
       objectData.isLoggeIn = true;
       this.RefreshSessionData(objectData);
     }
   }

   RefreshSessionData(data: SessionData){
     this.sessionDataSubject.next(data);
   }

   GetSessionStatus(){
     return this.sessionDataSubject.asObservable();
   }
   
   Login(email: string, password: string): Observable<SessionData>{
     return this.http.post<SessionData>(`${this.url}/login`, {
       correo: email,
       password: password,
     },{
       headers: new HttpHeaders({})
     });
    }

    VerifiedToken(): Observable<boolean>{
      let tk = this.localStorageService.GetToken();
      if(tk ==""){        
        return of(false)
       }else{
        return this.http.post<boolean>(`${this.url}/token-validator`,
        {token: tk});
       }     
    }
}
