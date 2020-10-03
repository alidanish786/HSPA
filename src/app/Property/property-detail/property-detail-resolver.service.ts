import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/model/Property';
import { HousingService } from 'src/app/Services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

constructor(private housingService:HousingService,private router:Router) { }

resolve(route:ActivatedRouteSnapshot,stage:RouterStateSnapshot)
:Observable<Property>|Property{

  const propId=route.params['id'];
  return this.housingService.getProperty(+propId).pipe(
    catchError(e=>{
        this.router.navigate(['/rent-property']);
        return of(null);
    })
  );

}

}
