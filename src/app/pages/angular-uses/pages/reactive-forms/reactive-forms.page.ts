import { CommonModule, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonPipe,
    ButtonModule,
    InputTextModule,
    TableModule,
  ],
  template: `
    <form
      [formGroup]="profileForm"
      class="mt-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="firstName"
        >
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          pInputText
          formControlName="firstName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="lastName"
        >
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          pInputText
          formControlName="lastName"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          pButton
          type="submit"
          label="Submit"
          [disabled]="!isFormValid"
          (click)="submit()"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        ></button>
        @if(emitedValue) {
        <span class="w-1/2"> Emited value: {{ emitedValue | json }} </span>
        }
      </div>
    </form>
    <div class="flex justify-center mt-4">
      <p-table [value]="[formData]" class="w-1/2">
        <ng-template pTemplate="header">
          <tr class="w-1">
            <th class="w-1/2">First Name</th>
            <th class="w-1/2">Last Name</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData>
          <tr>
            <td>{{ rowData.firstName }}</td>
            <td>{{ rowData.lastName }}</td>
          </tr>
        </ng-template>
      </p-table>
    </div>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormsPage {
  @Output() sendValue = new EventEmitter<any>();
  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  emitedValue: any;

  formData = {};
  displayedColumns: string[] = ['firstName', 'lastName'];
  isFormValid = false;

  constructor() {
    this.profileForm.valueChanges.subscribe((val) => {
      console.log('Form value has changed:', val);
      this.formData = val;
    });

    this.profileForm.statusChanges.subscribe((status) => {
      console.log('Form status has changed:', status);
      this.isFormValid = status === 'VALID';
    });

    this.sendValue.subscribe((data) => {
      this.emitedValue = data;
    });
  }

  submit() {
    this.sendValue.emit(this.formData);
  }
}
