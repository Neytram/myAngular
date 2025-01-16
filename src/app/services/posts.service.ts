import { Injectable } from '@angular/core'
import { Post } from '../models/post';
import { LikeType } from '../models/liketype.type';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    private postList: Post[] = [
        new Post("Captain Falcon", "Chasseur de prime", "https://1683a92a.delivery.rocketcdn.me/wp-content/uploads/2020/11/F-Zero-Captain-Falcon-790x450.jpg.webp", new Date(), 59).setLocation("Mute City"),
        new Post("Byleth", "Enseignant", "https://image.jeuxvideo.com/medias-crop-1200-675/156346/1563456314-7010-card.jpg", new Date(), 54),
        new Post("Felinferno", "Chat catcheur", "https://www.hindustantimes.com/ht-img/img/2023/05/30/550x309/ezgif-3-13db03efa4_1685470019369_1685470026035.jpg", new Date(), 68)
        ]

    getPosts(): Post[] {
        return[...this.postList]
    }

    getPostById(id: string): Post {
        const foundPost: Post | undefined = this.postList.find(post => post.id === id)
        if(!foundPost) throw new Error('Post non trouvé')
        return foundPost
    }

    postLikedById(id: string, likeType: LikeType) {
        const foundPost: Post | undefined = this.postList.find(post => post.id === id)
        
        if(foundPost) {
            if (likeType === 'like') foundPost.addLike()
                else if(likeType === 'unlike') foundPost.unLike()
        }
        else throw new Error('Post non trouvé')
    }
}