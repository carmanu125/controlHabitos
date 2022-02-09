import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_Post } from '../models/hxgn_Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  savePost(partition:hxgn_Post, url:string):Observable<hxgn_Post>{
    return this.http.post<hxgn_Post>(url,partition);
  }
  getPost(url:string):Observable<hxgn_Post[]>{
    return this.http.get<hxgn_Post[]>(url);
  }

  
  getCurrentPost(url:string):Observable<hxgn_Post>{
    console.log(url);
    return this.http.get<hxgn_Post>(url);
  }

  updatePost(Post:hxgn_Post, url:string):Observable<hxgn_Post>{
    return this.http.put<hxgn_Post>(url, Post);
  }

  deletePost(url:string):Observable<hxgn_Post>{
    console.log(url);
    return this.http.delete<hxgn_Post>(url);
  }

}
