import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { AppComponent } from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {PropertyCardComponent} from './Property/property-card/property-card.component';
import {PropertyListComponent} from './Property/property-list/property-list.component';
import {HousingService} from './Services/housing.service';
import { HttpClientModule } from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserServiceService } from './Services/user-service.service';
import { AlertifyService } from './Services/alertify.service';
import { AuthService } from './Services/auth.service';
import { PropertyDetailResolverService } from './Property/property-detail/property-detail-resolver.service';
import {FilterPipe} from './Pipes/filter.pipe';
import {SortPipe} from './Pipes/sort.pipe';
import { fileURLToPath } from 'url';

const appRoute:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'property-detail/:id',
      component:PropertyDetailComponent,
      resolve:{prp:PropertyDetailResolverService}},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'**',component:PropertyListComponent}
];

@NgModule({
  declarations: [
    AppComponent,PropertyCardComponent,PropertyListComponent,NavBarComponent,AddPropertyComponent,
    UserLoginComponent,UserRegisterComponent,PropertyDetailComponent
    ,FilterPipe,SortPipe
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoute),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxGalleryModule
  ],

  providers: [HousingService,UserServiceService,AlertifyService,AuthService],
  bootstrap: [AppComponent]

})
export class AppModule { }
