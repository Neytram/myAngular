import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { SharedImageComponent } from '../shared-image/shared-image.component';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  imports: [
    SharedImageComponent
  ],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postList!: Post[]

  constructor(private postsService: PostsService) {  }

  ngOnInit(): void {
    this.postList = this.postsService.getPosts()
  }
}
