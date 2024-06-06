import { SimpleRouteComponent } from './admin/simple-route/simple-route.component';
import { EditNewUserComponent } from './admin/edit-new-user/edit-new-user.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'admin',
        loadChildren:() =>   import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path:'add-new-user',
        loadComponent:() =>   import('./admin/add-new-user/add-new-user.component').then(c => c.AddNewUserComponent)
    },
    {
        path:'',      
        component:SimpleRouteComponent,
    }
];
