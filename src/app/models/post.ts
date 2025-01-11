export class Post {
    location?: string;

    // Constructeur qui expose des propriétés grâce à public
    constructor(
        public titre: string,
        public description: string,
        public image : string,
        public date: Date,
        public likes: number,
    ) {    }

    addLike() : void {
        this.likes++
    }

    unLike() : void {
        this.likes--
    }

    setLocation(location: string) {
        this.location = location
    }
}