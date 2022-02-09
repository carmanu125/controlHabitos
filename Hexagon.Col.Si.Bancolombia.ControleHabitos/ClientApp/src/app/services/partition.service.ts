import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hxgn_Partition } from '../models/hxgn_Partition';

@Injectable({
  providedIn: 'root'
})
export class PartitionService {

  constructor(private http:HttpClient) { }

  savePartition(partition:hxgn_Partition, url:string):Observable<hxgn_Partition>{
    return this.http.post<hxgn_Partition>(url,partition);
  }

  getPartition(url:string):Observable<hxgn_Partition[]>{
    return this.http.get<hxgn_Partition[]>(url);
  }

  
  getCurrentPartition(url:string):Observable<hxgn_Partition>{
    console.log(url);
    return this.http.get<hxgn_Partition>(url);
  }

  updatePartition(Partition:hxgn_Partition, url:string):Observable<hxgn_Partition>{
    return this.http.put<hxgn_Partition>(url, Partition);
  }

  deletePartition(url:string):Observable<hxgn_Partition>{
    console.log(url);
    return this.http.delete<hxgn_Partition>(url);
  }
}
