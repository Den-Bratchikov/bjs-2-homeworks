class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name
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
        } else if (n >= 0) {
            this._state = n;
        } else if (n < 0) {
            this._state = 0
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


class Library {
    constructor (name) {
        if (typeof name === "string") {
            this.name = name
        }
        
        this.books = []
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(searchKey, value) {
        // Способ 1. Императивный.
        // for (let i = 0; i < this.books.length; i++) {
        //     let count = 0;
            
        //     for (let key in this.books[i]) {
        //     count++
        //     }
        
        //     for (let i = 0; i < count; i++) {
        //         if (this.books[i][searchKey] === value ) {
        //             console.log(this.books[i].name)
        //         }
        //     }
        // }
        
        // Способ 2. Декларативный.
        let result = this.books.find(book => book[searchKey] === value)
        if (result === undefined) {
            return null
        } else {
            return result
        }
    }

    giveBookByName(bookName) {
        let n = this.books.findIndex(book => book.name === bookName)
        if (n > -1) {
            let result = this.books[n]
            this.books.splice(n, 1)
            return result

        } else {
            return null
        }
    }
}




// function newFunction() {
    // return this;
// }
