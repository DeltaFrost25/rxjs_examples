import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  template: `
    <div class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h1 class="text-4xl mb-4">Counter: {{ clickCounter }}</h1>
        <button
          (click)="increment()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
      </div>
    </div>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesPage {
  clickCounter = 0;
  clickAction = new Subject<number>();
  //clickAction = new BehaviorSubject(5);

  clickAction$ = this.clickAction.asObservable();

  constructor() {
    this.clickAction$.subscribe(
      (totalClicks) => (this.clickCounter = totalClicks)
    );
  }

  increment() {
    this.clickAction.next(++this.clickCounter);
  }
}
