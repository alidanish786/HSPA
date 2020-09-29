import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HousingService} from '../../Services/housing.service';
import { IProperty } from '../../model/IProperty';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor(private housingService:HousingService,private route:ActivatedRoute,private router:Router) { }
  sellRent:number=1;
  ngOnInit() {
      let url=this.router.url;
      if(url!="/"){
        this.sellRent=2;
      }

    this.housingService.getAllProperties(this.sellRent).subscribe(data=>{
      this.properties=data
    },error=>{console.log(error)})
  }

properties:Array<IProperty>;
  // properties: Array<any> = [
  //   {
  //     id: '1',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   },
  //   {
  //     id: '2',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   }, {
  //     id: '3',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   }, {
  //     id: '4',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   }, {
  //     id: '5',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   }, {
  //     id: '6',
  //     type: 't1',
  //     price: '10000',
  //     name: 'Home',
  //   },
  // ];
}
