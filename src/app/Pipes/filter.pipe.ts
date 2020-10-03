import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string,propName:string): any[] {
    let finalArray=[];
    if(value.length===0 || filterString===''|| propName==='')
    return value;
    else
    {
      for (var item of value){
        if(item[propName]===filterString){
            finalArray.push(item);
        }
      }
      return finalArray;
    }
  }

}
