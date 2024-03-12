import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-http-calls',
  standalone: true,
  imports: [],
  template: `
    <p>
      http-calls works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HttpCallsPage {

}
