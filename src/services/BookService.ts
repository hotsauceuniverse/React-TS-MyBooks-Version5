import axios from "axios";
import { BookReqType, BookType } from "../types";

const API = "https://api.marktube.tv/v1/book";
export default class BookService {
  public static async getBooks(token: string): Promise<BookType[]> {
    const res = await axios.get(API, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
  public static async addBook(
    token: string,
    book: BookReqType
  ): Promise<BookType> {
    const res = await axios.post(API, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
  public static async deleteBook(token: string, bookId: number) {
    await axios.delete(`${API}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}