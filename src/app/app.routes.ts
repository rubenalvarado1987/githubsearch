import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { RootComponent } from './dashboard/root/root.component';

const routes: Routes = [
  {path: '', component: RootComponent, children: [
    {path: '', component: HomeComponent},
  ]}
];

export const routing = RouterModule.forRoot(routes);