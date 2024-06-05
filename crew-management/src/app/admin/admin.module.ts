import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { EditNewUserComponent } from './edit-new-user/edit-new-user.component';


@NgModule({
  declarations: [
    EditNewUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
