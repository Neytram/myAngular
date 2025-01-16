import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedImageComponent } from './shared-image/shared-image.component';
import { Post } from './models/post';
import { PostListComponent } from "./post-list/post-list.component";
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    PostListComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  
}
