import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
vehicle;
  constructor(public service:DataService) { }

  ngOnInit() {
  }
  AddData(c:any)
  {
    let val=c.form.value;
    console.log(val);
    let data=this.service.adddata(val);
    data.subscribe((res)=>{
      this.vehicle=res;
      console.log(this.vehicle);
    });
  }

}
