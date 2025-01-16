import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Post } from '../models/post';
import { NgStyle } from '@angular/common';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-post',
  imports: [
    NgStyle,
    CommonModule,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent implements OnInit {
  post!: Post
  @ViewChild("boutonLike") boutonLike!: ElementRef<HTMLButtonElement>
  liked!: boolean
  likeButtonText! : string

  constructor(private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //Likes
    this.liked = false
    this.likeButtonText = "Like"

    const postId = this.route.snapshot.params['id']
    this.post = this.postsService.getPostById(postId)
  }

  onLike(): void {
    if(this.liked === false)
    {
      this.postsService.postLikedById(this.post.id, 'like')
      this.liked = true
      this.likeButtonText = "UnLike"
      this.boutonLike.nativeElement.className = "boutonLike2"
    } else
    {
      this.postsService.postLikedById(this.post.id, 'unlike')
      this.liked = false
      this.likeButtonText = "Like"
      this.boutonLike.nativeElement.className = "boutonLike"
    }
  }
}
