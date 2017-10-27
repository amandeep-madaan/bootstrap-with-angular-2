import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { DemoNumberPipe } from './demo-number.pipe';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturesComponent } from './features/features.component';
import { CallusComponent } from './callus/callus.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CustomerComponent } from './customer/customer.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    BannerComponent,
    CardComponent,
    DemoNumberPipe,
    PortfolioComponent,
    FeaturesComponent,
    CallusComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    TeamComponent,
    CustomerComponent,
    ServiceComponent,
    ContactComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
