import { Component, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-example-observable',
  standalone: true,
  templateUrl: './example-observable.component.html',
})
export default class ExampleObservableComponent {
  counter$ = interval(1000);
  counter = toSignal(this.counter$);

  counter2$ = interval(1000);
  counterWithIntialValue = toSignal(this.counter2$, { initialValue: 0 });
  counter2Effect = effect(() => console.log('Count effect: ', this.counterWithIntialValue()));


  counter3$ = interval(1000).pipe(take(6));
  counterUpto5 = toSignal(this.counter3$);
}
