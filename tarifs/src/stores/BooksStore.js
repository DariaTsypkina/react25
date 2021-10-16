import {action, observable} from 'mobx';

class BooksStore {
    @observable books = []

    @action addBook = (book) => {
        return this.books.push(book)
    }
    @action removeBook = (index) => {
        return this.books.splice(index, 1)
    }
}

export default BooksStore;