import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appEventSort'
})
export class EventSortPipe implements PipeTransform {

  transform(value: any[], args: string[]): any {
    const keyName = Object.keys(args)[0];
    function compare(a: any, b: any) {
      let first = '';
      let second = '';
      switch (keyName) {
        case 'profile':
          first = a.profile.firstName + ' ' + a.profile.lastName;
          second = b.profile.firstName + ' ' + b.profile.lastName;
          break;
        case 'motives':
          first = a.motives;
          second = b.motives;
          break;
      }
      const result = first.toString().localeCompare(second);
      if (args[keyName]) {
        return result;
      }
      return -result;
    }
    if (value) {
      value.sort(compare);
    }
    return value;
  }

}
