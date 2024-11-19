import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../service/records.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emp-info',
  standalone: true,
  imports: [CommonModule],
  providers:[RecordsService],
  templateUrl: './emp-info.component.html',
  styleUrl: './emp-info.component.css'
})
export class EmpInfoComponent implements OnInit{
  ngOnInit(): void {};

  constructor (private rservice:RecordsService){};

  infoReceived1:string[]=[];
  infoReceived2:string[]=[];
  infoReceived3:string[]=[];

  getInfoFromService1(){
    this.infoReceived1=this.rservice.getInfo1();
  }

  getInfoFromService2(){
    this.infoReceived2=this.rservice.getInfo2();
  }

  getInfoFromService3(){
    this.infoReceived3=this.rservice.getInfo3();
  }


}
