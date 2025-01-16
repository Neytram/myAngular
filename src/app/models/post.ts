export class Post {
    location?: string;
    id: string;

    // Constructeur qui expose des propriétés grâce à public
    constructor(
        public titre: string,
        public description: string,
        public image : string,
        public date: Date,
        public likes: number,
    ) {
        this.id=crypto.randomUUID();
    }

    addLike() : void {
        this.likes++
    }

    unLike() : void {
        this.likes--
    }

    setLocation(location: string): Post {
        this.location = location
        return this
    }
}