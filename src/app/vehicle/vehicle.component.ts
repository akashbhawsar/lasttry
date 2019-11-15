import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
vehicle;
msg;
  constructor(public router:Router,
    public service:DataService) {
    this.getdata();
   }
  ngOnInit() {
  }
  getdata()
  {
    let data=this.service.getData();    
    data.subscribe((res)=>{
      console.log(res);
      this.vehicle=res;
      console.log(data);
    });
  }
  
  Register()
  {
    this.router.navigate(['register']);
  }

  delete(n:any)
  {
    let data=n;
    let status=this.service.Delete(data);
  status.subscribe((res)=>{
    this.vehicle=res;
   

  });
  }
  
}
