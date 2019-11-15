import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  getData()
  {
    return this.http.get("http://13.233.5.223:3537/vehicle");
  }
  adddata(c:any)
  {
    return this.http.post("http://13.233.5.223:3537/vehicle/",c);
  }
  Delete(n:any)
  {
    return (this.http.delete("http://13.233.5.223:3537/vehicle/"+n));
  }
}
