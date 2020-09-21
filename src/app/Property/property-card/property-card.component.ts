import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Property:any={
    id:"1",
    type:"t1",
    price:"10000",
    name:"Home"
  }

}
