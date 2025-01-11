import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Post } from '../models/post';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-shared-image',
  imports: [
    NgStyle
  ],
  templateUrl: './shared-image.component.html',
  styleUrl: './shared-image.component.scss'
})
export class SharedImageComponent implements OnInit {
  @Input() post!: Post
  @ViewChild("boutonLike") boutonLike!: ElementRef<HTMLButtonElement>
  liked!: boolean
  likeButtonText! : string

  ngOnInit(): void {
    //Likes
    this.liked = false
    this.likeButtonText = "Like"
  }

  onLike(): void {
    if(this.liked === false)
    {
      this.post.addLike()
      this.liked = true
      this.likeButtonText = "UnLike"
      this.boutonLike.nativeElement.className = "boutonLike2"
    } else
    {
      this.post.unLike()
      this.liked = false
      this.likeButtonText = "Like"
      this.boutonLike.nativeElement.className = "boutonLike"
    }
  }
}
