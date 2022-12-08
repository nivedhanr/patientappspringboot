import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addpatient=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/add",datatosend)
  }
  viewpatient =()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
  readValues=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/search",datatosend)
}
deletePatient=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/delete",datatosend)
}
}
