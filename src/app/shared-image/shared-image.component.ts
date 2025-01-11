import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-shared-image',
  imports: [],
  templateUrl: './shared-image.component.html',
  styleUrl: './shared-image.component.scss'
})
export class SharedImageComponent implements OnInit {
  @Input() post!: Post
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
    } else
    {
      this.post.unLike()
      this.liked = false
      this.likeButtonText = "Like"
    }
  }


}
