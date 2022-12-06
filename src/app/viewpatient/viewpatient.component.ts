import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
  constructor(private api:ApiService){
    api.viewpatient().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
