import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contactenos',
    loadChildren: () =>
      import('./modules/contactenos/contactenos.routes').then((m) => m.routes),
  },
];
