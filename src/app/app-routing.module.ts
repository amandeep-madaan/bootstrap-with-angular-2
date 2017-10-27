import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent },
  { path: 'about',    component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'contact',  component: ContactComponent },
  { path: 'posts',    component: PostsComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'albums',   component: AlbumsComponent },
  { path: 'photos',   component: PhotosComponent },
  { path: 'todos',    component: TodosComponent },
  { path: 'users',    component: UsersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}