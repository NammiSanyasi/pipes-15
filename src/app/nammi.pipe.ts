import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nammi'
})
export class NammiPipe implements PipeTransform {

  transform(value:number, ...args: unknown[]): unknown {
    if(value %2 ==0 ){
      return "EVEN"
    }
    else{
      return "ODD"
    }

}
}