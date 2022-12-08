import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService,private route:Router){}

  pid=""

  readValues:any = []

  readValue=()=>

  {

    let data:any={

    "pid":this.pid}

    console.log(data)

    this.api.readValues(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {

          alert("invalide patient")

         

        } else {

          this.readValues = response

        }

      }
      

    )

  }
  deleteBtnClick=(id:any)=>{
    let data:any={ "id":id}
    this.api.deletePatient(data).subscribe(
      (reponse:any)=>{
        console.log(reponse)
        if (reponse.status=="success") {
          alert("deleted successfully")
          
          this.route.navigate(['/view'])
        }
      }
    )
  }
}
