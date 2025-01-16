import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Post } from '../models/post';
import { NgStyle } from '@angular/common';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-shared-image',
  imports: [
    NgStyle,
    CommonModule,
    DatePipe
  ],
  templateUrl: './shared-image.component.html',
  styleUrl: './shared-image.component.scss'
})
export class SharedImageComponent implements OnInit {
  @Input() post!: Post
  @ViewChild("boutonLike") boutonLike!: ElementRef<HTMLButtonElement>
  liked!: boolean
  likeButtonText! : string

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    //Likes
    this.liked = false
    this.likeButtonText = "Like"
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
