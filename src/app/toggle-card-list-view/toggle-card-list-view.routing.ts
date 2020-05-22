import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToggleCardListViewComponent } from './toggle-card-list.component';
import { ViewDetailComponent } from '../view-detail/view-detail.component';
import { ListViewComponent } from './components/list-view/list-view.component';



const heroesRoutes: Routes = [
{ path: 'toggle-card-list',  redirectTo: "/list-view" },
{ path: 'list-view',  component: ListViewComponent, data: { breadcrumb: "List View" }, children: [
    { path: 'detail/:id', component: ViewDetailComponent, data: { breadcrumb: "Detail" } }
] },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToggleCardListRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/