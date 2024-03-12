import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-angular-uses',
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>angular-uses works!</p>
    <router-outlet />
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularUsesPage {}
