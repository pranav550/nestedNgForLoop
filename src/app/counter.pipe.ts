import { Counter } from './counter';
import { Pipe, PipeTransform } from '@angular/core';
const counters = new WeakMap<any, Counter>();
@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {
  transform(value: any): Counter {
    if (!counters.has(value)) {
      counters.set(value, new Counter());
    }
    return counters.get(value);
  }

}
