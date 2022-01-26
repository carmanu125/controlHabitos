import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_Users } from '../models/hxgn_Users';
// import { utils } from '../utils/utils';


@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http:HttpClient) { }


  saveUser(partition:hxgn_Users, url:string):Observable<hxgn_Users>{
    return this.http.post<hxgn_Users>(url,partition);
  }

  getUsers(url:string):Observable<hxgn_Users[]>{
    return this.http.get<hxgn_Users[]>(url);
  }

  getUser(url:string):Observable<hxgn_Users>{
    console.log(url);
    return this.http.get<hxgn_Users>(url);
  }

  updateUser(User:hxgn_Users, url:string):Observable<hxgn_Users>{
    return this.http.put<hxgn_Users>(url, User);
  }

  loginUser(User:hxgn_Users, url:string):Observable<hxgn_Users>{
    return this.http.post<hxgn_Users>(url, User);
  }

  setUserCookie(name: string,idUser:string) {
    // this.utils.setCookie(this.utils.key_user_name, name, 1);
    // this.utils.setCookie(this.utils.key_user_id, idUser, 1);
  }
  getUserName() {
    // return this.utils.getCookie(this.utils.key_user_name);
  }

  getUserId() {
    // return this.utils.getCookie(this.utils.key_user_id);
  }

}
