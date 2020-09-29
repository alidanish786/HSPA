import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../model/IProperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private http: HttpClient) {}

  getAllProperties(sellRent: number): Observable<IProperty[]> {
    return this.http.get('assets/data/data.json').pipe(
      map((data) => {
        const propArray: Array<IProperty> = [];
        for (const Id in data) {
          if (data.hasOwnProperty(Id) && data[Id].SellRent===sellRent) {
            propArray.push(data[Id]);
            // console.log(id)
          }
        }
        return propArray;
      })
    );
  }
}
