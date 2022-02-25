class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.state = 100
        this.type = null
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
    }
    
    fix() {
        this.state = this.state * 1.5;
    } 
    
    set state(n) {
        if (n > 100) {
            this._state = 100;
        } else {
            this._state = n;
        }
    }

    get state() {
        return this._state;
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name);
        this.state = 100
        this.type = "magazine"
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(name, releaseDate, pagesCount);
        this.author = author  
        this.state = 100
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100
        this.type = "fantastic"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, ) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100
        this.type = "detective"
    }
}


// function newFunction() {
//     return this;
// }
