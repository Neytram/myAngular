import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePostComponent } from './single-post/single-post.component';

export const routes: Routes = [
    { path: 'posts/:id', component: SinglePostComponent},
    { path: 'posts', component: PostListComponent },
    { path: '', component: LandingPageComponent }
];
