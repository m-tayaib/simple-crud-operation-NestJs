import { Injectable } from '@nestjs/common';
import { Book } from './data/book.tdo';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //created Book Method
  createdBook(data: Book): object {
    data.id = uuid();
    this.books.push(data);
    return {
      success: true,
      message: 'Book created successfully',
    };
  }
  // read all books Method
  getBooks(): object {
    return {
      success: true,
      data: this.books,
      message: 'Data fetched successfully',
    };
  }

  // updated book method
  updatedBook(book: Book): object {
    const findBookByIndex = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    this.books[findBookByIndex] = book;
    return {
      success: true,
      message: 'Book updated successfully',
      data: this.books,
    };
  }

  // delete book method
  deletedBook(id): object {
    const findBookById = this.books.filter((currentBook) => {
      return currentBook.id !== id;
    });
    this.books = findBookById;
    return {
      success: true,
      message: 'Book deleted successfully',
    };
  }
}
