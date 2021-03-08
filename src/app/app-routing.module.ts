import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionComponent } from './gestion/gestion.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '',
    component: SideNavComponent
  },
  {
    path:'gestion',
    component: GestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
