import React, { useState, useMemo } from "react";
import { useBookAuthor } from "../../contexts/BookAuthorContext";
import { Table } from "../../components/Table/Table";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Alert } from "../../components/Alert/Alert";
import { BookForm } from "./BookForm";
import { Book } from "../../models";
import { ColumnDef } from "@tanstack/react-table";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  SearchContainer,
  SearchInput,
} from "./Books.styles";

export const Books: React.FC = () => {
  const { books, authors, addBook, updateBook, deleteBook } = useBookAuthor();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
    isOpen: boolean;
    onConfirm?: () => void;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = useMemo(() => {
    return books.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        authors
          .find((author) => author.id === book.author_id)
          ?.name.toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
  }, [books, authors, searchTerm]);

  const columns = useMemo<ColumnDef<Book>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Nome",
        accessorKey: "name",
      },
      {
        header: "Autor",
        accessorFn: (row: Book) =>
          authors.find((author) => author.id === row.author_id)?.name ||
          "Unknown",
      },
      {
        header: "Páginas",
        accessorKey: "pages",
      },
      {
        header: "Ações",
        cell: ({ row }) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={() => handleViewBook(row.original)}>Ver</Button>
            <Button onClick={() => handleDeleteBook(row.original.id)}>
              Excluir
            </Button>
          </div>
        ),
      },
    ],
    [authors]
  );

  const handleViewBook = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleDeleteBook = (id: string) => {
    setAlert({
      message: "Tem certeza que deseja excluir este livro?",
      type: "error",
      isOpen: true,
      onConfirm: () => {
        deleteBook(id);
        setAlert({
          message: "Livro excluído com sucesso",
          type: "success",
          isOpen: true,
        });
      },
    });
  };

  const handleCreateOrUpdateBook = (book: Book) => {
    if (book.id) {
      updateBook(book);
      setAlert({
        message: "Livro atualizado com sucesso",
        type: "success",
        isOpen: true,
      });
    } else {
      addBook(book);
      setAlert({
        message: "Livro criado com sucesso",
        type: "success",
        isOpen: true,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Livros</PageTitle>
      </PageHeader>
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          isOpen={alert.isOpen}
          onClose={() => setAlert(null)}
          onConfirm={alert.onConfirm}
        />
      )}
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Pesquisar por nome do livro ou autor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={() => {
            setSelectedBook(null);
            setIsModalOpen(true);
          }}
        >
          Novo Livro
        </Button>
      </SearchContainer>
      <Table data={filteredBooks} columns={columns} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedBook ? "Atualizar Livro" : "Novo Livro"}
      >
        <BookForm
          book={selectedBook}
          authors={authors}
          onSubmit={handleCreateOrUpdateBook}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </PageContainer>
  );
};
