import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_accountsMode } from 'src/app/models/hxgn_accountsMode';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {


  constructor(private http:HttpClient) { }

  saveAgencia(account:hxgn_accountsMode, url:string):Observable<hxgn_accountsMode>{
    return this.http.post<hxgn_accountsMode>(url,account);
  }

  

  getAccounts(url:string):Observable<hxgn_accountsMode[]>{
    return this.http.get<hxgn_accountsMode[]>(url);
  }

  getAccount(url:string):Observable<hxgn_accountsMode>{
    console.log(url);
    return this.http.get<hxgn_accountsMode>(url);
  }

  updateAgencia(account:hxgn_accountsMode, url:string):Observable<hxgn_accountsMode>{
    return this.http.put<hxgn_accountsMode>(url, account);
  }
}
