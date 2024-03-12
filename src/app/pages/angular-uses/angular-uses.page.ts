import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
@Component({
  selector: 'app-angular-uses',
  standalone: true,
  imports: [RouterModule, TabMenuModule],
  template: `
    <div class="text-center py-5 bg-indigo-400 text-white text-3xl mb-5">
      <h1>Ruta Actual: {{ currentRoute }}</h1>
    </div>

    <div class="flex justify-center">
      <div class="w-1/2">
        <p-tabMenu class="w-100" [model]="items" />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-1/2">
        <router-outlet />
      </div>
    </div>
  `,
  styles: ``,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularUsesPage {
  currentRoute: string = '';
  items: MenuItem[] = [
    {
      label: 'Formularios Reactivos',
      routerLink: ['/angular-uses/reactive-forms'],
      styleClass: 'w-1/2',
    },
    {
      label: 'Angular Http',
      routerLink: ['/angular-uses/http'],
      styleClass: 'w-1/2',
    },
  ];

  private router = inject(Router).events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.url;
    }
  });
}
