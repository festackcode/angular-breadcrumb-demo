import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {TabViewModule} from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { ToggleInputTypeComponent } from './toggle-input-type/toggle-input-type.component';

import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ToggleCardListModule } from './toggle-card-list-view/toggle-card-list-view.module';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  imports:      [ BrowserModule, ToggleCardListModule, FormsModule, ToggleButtonModule, TabViewModule, AppRoutingModule, BrowserAnimationsModule, BreadcrumbModule ],
  declarations: [ AppComponent, ToggleInputTypeComponent, HomeComponent, ViewDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
