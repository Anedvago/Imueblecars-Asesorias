import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/inicio/inicio.routes').then((m) => m.routes),
      },
      {
        path: 'contactenos',
        loadChildren: () =>
          import('./modules/contactenos/contactenos.routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
