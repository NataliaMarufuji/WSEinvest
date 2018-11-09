import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Menu/menu.component';

const appRoutes: Routes = [

   { path: '', component: MenuComponent },
];

export const routing = RouterModule.forRoot(appRoutes);