import { createContext, ReactNode, useContext } from "react";
import { Book, Author } from "../models";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface BookAuthorContextData {
  books: Book[];
  authors: Author[];
  addBook: (book: Book) => void;
  updateBook: (book: Book) => void;
  deleteBook: (id: string) => void;
  addAuthor: (author: Author) => void;
  updateAuthor: (author: Author) => void;
  deleteAuthor: (id: string) => void;
}

interface BookAuthorProviderProps {
  children: ReactNode;
}

const BookAuthorContext = createContext<BookAuthorContextData>(
  {} as BookAuthorContextData
);

export const BookAuthorProvider: React.FC<BookAuthorProviderProps> = ({
  children,
}) => {
  const [books, setBooks] = useLocalStorage<Book[]>("books", []);
  const [authors, setAuthors] = useLocalStorage<Author[]>("authors", []);

  const addBook = (book: Book) => {
    setBooks([...books, { ...book, id: Date.now().toString() }]);
  };

  const updateBook = (book: Book) => {
    setBooks(books.map((b) => (b.id === book.id ? book : b)));
  };

  const deleteBook = (id: string) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const addAuthor = (author: Author) => {
    setAuthors([...authors, { ...author, id: Date.now().toString() }]);
  };

  const updateAuthor = (author: Author) => {
    setAuthors(authors.map((a) => (a.id === author.id ? author : a)));
  };

  const deleteAuthor = (id: string) => {
    setAuthors(authors.filter((author) => author.id !== id));
  };

  return (
    <BookAuthorContext.Provider
      value={{
        books,
        authors,
        addBook,
        updateBook,
        deleteBook,
        addAuthor,
        updateAuthor,
        deleteAuthor,
      }}
    >
      {children}
    </BookAuthorContext.Provider>
  );
};

export const useBookAuthor = () => useContext(BookAuthorContext);
