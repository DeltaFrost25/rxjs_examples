import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  template: `
    <button (click)="increment()">Clicks Done {{ clickCounter }}</button>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObservablesPage {
  clickCounter = 0;
  //clickAction = new Subject<number>();
  clickAction = new BehaviorSubject(5);

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
