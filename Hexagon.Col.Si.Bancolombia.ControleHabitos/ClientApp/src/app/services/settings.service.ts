import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_Settings } from '../models/hxgn_Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient) { }

  saveSettings(setting:hxgn_Settings, url:string):Observable<hxgn_Settings>{
    return this.http.post<hxgn_Settings>(url,setting);
  }

  getSettings(url:string):Observable<hxgn_Settings[]>{
    return this.http.get<hxgn_Settings[]>(url);
  }

  
  getSetting(url:string):Observable<hxgn_Settings>{
    console.log(url);
    return this.http.get<hxgn_Settings>(url);
  }

  updateSetting(Settings:hxgn_Settings, url:string):Observable<hxgn_Settings>{
    return this.http.put<hxgn_Settings>(url, Settings);
  }

  deleteSetting(url:string):Observable<hxgn_Settings>{
    console.log(url);
    return this.http.delete<hxgn_Settings>(url);
  }
  
}
