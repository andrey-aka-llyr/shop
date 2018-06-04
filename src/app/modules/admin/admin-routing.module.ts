import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent, EditItemComponent } from './components';
import { AuthenticatedGuard } from '../../guards';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthenticatedGuard],
    canActivateChild: [AuthenticatedGuard],
    children: [
        {
            path: 'new',
            component: EditItemComponent
        },
        {
            path: 'edit/:id',
            component: EditItemComponent,
        },
        {
            path: '',
            component: DashboardComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
