import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent, CommentsComponent } from './modules/core/components';
import { CoreDemoComponent } from './modules/demo/components';

const routes: Routes = [
    {
        path: 'demo',
        component: CoreDemoComponent
    },
    {
        path: 'comments',
        component: CommentsComponent,
        outlet: 'comments'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
