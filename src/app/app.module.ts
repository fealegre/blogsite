import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogEditorComponent } from './components/blog-editor/blog-editor.component';
import { ExcerptPipe } from './customPipes/excerpt.pipe';
import { SlugPipe } from './customPipes/slug.pipe';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthGuard } from './guards/auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthorProfileComponent } from './components/author-profile/author-profile.component';
import { ScrollerComponent } from './components/scroller/scroller.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ShareModule, ShareButtonsConfig } from 'ngx-sharebuttons';
import { ShareButtonModule } from 'ngx-sharebuttons/button';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { SocialShareComponent } from './components/social-share/social-share.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

const customConfig: ShareButtonsConfig = {
  twitterAccount: 'alegrefernando',
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BlogEditorComponent,
    ExcerptPipe,
    SlugPipe,
    BlogCardComponent,
    BlogComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    ScrollerComponent,
    CommentsComponent,
    SocialShareComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgMaterialModule,
    RouterModule.forRoot([
      {
        path: 'editpost/:id',
        component: BlogEditorComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'addpost',
        component: BlogEditorComponent,
        canActivate: [AuthGuard],
      },
      { path: 'blog/:id/:slug', component: BlogComponent },
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'editpost/:id', component: BlogEditorComponent },
      { path: 'page/:pagenum', component: HomeComponent },
      { path: '**', component: HomeComponent },
    ]),
    FormsModule,
    CKEditorModule,
    NgxPaginationModule,
    AngularFireAuthModule,
    HttpClientModule,
    ShareModule.withConfig(customConfig),
    ShareButtonModule,
    ShareIconsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
