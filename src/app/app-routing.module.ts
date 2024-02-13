import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPostsComponent } from './admin/admin-posts/admin-posts.component';
import { AdminViewPostsComponent } from './admin/admin-view-posts/admin-view-posts.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPostsComponent
  },
  {
    path : 'admin/posts/:id',
    component : AdminViewPostsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
