import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToggleInputTypeComponent } from './toggle-input-type/toggle-input-type.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
    { path: 'toggle-card-list', loadChildren: () => import('./toggle-card-list-view/toggle-card-list-view.module').then(m => m.ToggleCardListModule) , data: { preload: true } },
    { path: 'toggle-input-type', component: ToggleInputTypeComponent, data: { breadcrumb: 'Input view'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
