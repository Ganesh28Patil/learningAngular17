import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';



@NgModule({
  declarations: [  
    AddUserComponent
  ],
  imports: [
    CommonModule,EditUserComponent
  ],
  exports:[
    AddUserComponent,EditUserComponent
  ]
})
export class UsersModule { }
