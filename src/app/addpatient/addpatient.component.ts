import { Component } from '@angular/core';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {
  pid=""
  pname=""
  address=""
  mobileno=""
  doapp=""
  dname=""
  readValues=()=>{
    let data:any={"pid":this.pid"name":this.pname,"address":this.address,"mobileno":this.mobileno,"doapp":this.doapp,"dname":this.dname}
    console.log(data)
  }

}
