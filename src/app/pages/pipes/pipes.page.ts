import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  filter,
  from,
  interval,
  map,
  share,
  shareReplay,
  tap,
} from 'rxjs';

type Person = {
  name: string;
  age: number;
};
@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  template: `
    <div class="flex justify-center items-center h-screen">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let person of people">
            <td class="border px-4 py-2">{{ person.name }}</td>
            <td class="border px-4 py-2">{{ person.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipesPage {
  people: Person[] = [];
  people$: Observable<Person> = /* of */ from([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 50 },
  ]);

  constructor() {
    this.people$.subscribe((person) => {
      return (this.people = [...this.people, person]);
    });
  }
}

/*
  people: Person[] = [];
  people$: Observable<Person> = from([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 20 },
    { name: 'Bob', age: 50 },
  ]).pipe(
    map((person) => {
      if (person.name.startsWith('J'))
        person.name = person.name.replace('J', 'Y');
      return person;
    }),
    tap(() => console.log('emited')),
    shareReplay()
  );

  olderPeople$: Observable<Person> = this.people$.pipe(
    filter((person) => person.age > 30)
  );

  youngerPeople$: Observable<Person> = this.people$.pipe(
    filter((person) => person.age <= 30)
  );

  constructor() {
    this.youngerPeople$.subscribe((person) => {
      return (this.people = [...this.people, person]);
    });
    this.olderPeople$.subscribe((person) => {
      return (this.people = [...this.people, person]);
    });
  }
*/
