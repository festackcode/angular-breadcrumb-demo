import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ListViewComponent } from './components/list-view/list-view.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ToggleCardListRoutingModule } from './toggle-card-list-view.routing';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    ToggleCardListRoutingModule,
    ToggleButtonModule
    
  ],
  declarations: [
    ListViewComponent,
    CardViewComponent
  ],
  providers: [
      UserService
  ]
})
export class ToggleCardListModule {}