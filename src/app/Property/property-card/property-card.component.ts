import { Component, Input, OnInit } from '@angular/core';
// import { IpcSocketConnectOpts } from 'net';
import { IProperty } from '../../model/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor() {}
@Input() property:IProperty;
@Input() hideIcons:boolean;
  ngOnInit() {
    console.log(this.property)
  }

  // Property: IProperty =
  //   {
  //     Id: 1,
  //     PType: 't1',
  //     Price: 10000,
  //     Name: 'Home',
  //     Sellrent:1,
  //     BHK:null,RTM:null,BuiltArea:null,City:'',Description:'', FType:''


  //   }
  // ;
}
