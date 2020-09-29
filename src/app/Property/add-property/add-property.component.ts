import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../../model/IProperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  constructor(private route: Router) {}
  @ViewChild('addPropTabs') addPropTabs: TabsetComponent;
  propertyView:IProperty={
    Name:'',Price:null,Sellrent:null,PType:'',Image:'',
    BHK:null,RTM:null,BuiltArea:null,City:'',Description:'', FType:'',Id:null
  };

  propertyTypes:Array<string>=['House','Apartment','Duplex'];
  furnishTypes:Array<string>=['Fully','Semi','Unfurnished'];

  ngOnInit() {}

  OnBack() {
    this.route.navigate(['/']);
  }

  onSubmit(form:NgForm){
    // debugger
    console.log(form.value)
  }

  selectTab(tabId: number) {
    this.addPropTabs.tabs[tabId].active = true;
  }
}
