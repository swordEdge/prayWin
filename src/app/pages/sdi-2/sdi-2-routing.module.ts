import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Sdi2Component } from './sdi-2.component';

const routes: Routes = [
  { path: '', component: Sdi2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sdi2RoutingModule { }
