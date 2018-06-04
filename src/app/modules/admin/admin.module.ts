import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ToolkitModule } from '../toolkit/toolkit.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolkitModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, DashboardComponent, DashboardItemComponent, EditItemComponent]
})
export class AdminModule { }
