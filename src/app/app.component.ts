import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedImageComponent } from './shared-image/shared-image.component';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  imports: [
    SharedImageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  postList!: Post[]

  ngOnInit () {
    this.postList = [
      new Post("Captain Falcon", "Chasseur de prime", "https://1683a92a.delivery.rocketcdn.me/wp-content/uploads/2020/11/F-Zero-Captain-Falcon-790x450.jpg.webp", new Date(), 4),
      new Post("Byleth", "Enseignant", "https://image.jeuxvideo.com/medias-crop-1200-675/156346/1563456314-7010-card.jpg", new Date(), 7),
      new Post("Felinferno", "Chat catcheur", "https://www.hindustantimes.com/ht-img/img/2023/05/30/550x309/ezgif-3-13db03efa4_1685470019369_1685470026035.jpg", new Date(), 3)
    ]

    this.postList[0].setLocation("Mute City")
  }
}
