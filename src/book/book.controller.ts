import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './data/book.tdo';

@Controller('book')
export class BookController {
  constructor(public bookMethods: BookService) {}

  // created Book Method
  @Post('/create')
  createdBook(@Body() data: Book): object {
    return this.bookMethods.createdBook(data);
  }

  // read all books Method
  @Get('/read')
  readBooks(): object {
    return this.bookMethods.getBooks();
  }

  //update book method
  @Put('/update')
  updateBook(@Body() book: Book): object {
    console.log(book);
    return this.bookMethods.updatedBook(book);
  }

  @Delete('/remove/:id')
  deleteBook(@Param('id') id: string): object {
    return this.bookMethods.deletedBook(id);
  }
}
