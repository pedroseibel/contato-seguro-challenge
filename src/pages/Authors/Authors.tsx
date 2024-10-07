import React, { useState, useMemo } from "react";
import { useBookAuthor } from "../../contexts/BookAuthorContext";
import { Table } from "../../components/Table/Table";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { Alert } from "../../components/Alert/Alert";
import { AuthorForm } from "./AuthorForm.tsx";
import { Author } from "../../models/index.ts";
import { SearchContainer, SearchInput } from "./Authors.styles";
import { ColumnDef } from "@tanstack/react-table";
import { PageContainer, PageHeader, PageTitle } from "../Books/Books.styles.ts";

export const Authors: React.FC = () => {
  const { authors, addAuthor, updateAuthor, deleteAuthor } = useBookAuthor();
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
    isOpen: boolean;
    onConfirm?: () => void;
  } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAuthors = useMemo(() => {
    return authors.filter(
      (author) =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (author.email &&
          author.email.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [authors, searchTerm]);

  const columns = useMemo<ColumnDef<Author>[]>(
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
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Ações",
        cell: ({ row }) => (
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={() => handleViewAuthor(row.original)}>Ver</Button>
            <Button onClick={() => handleDeleteAuthor(row.original.id)}>
              Excluir
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  const handleViewAuthor = (author: Author) => {
    setSelectedAuthor(author);
    setIsModalOpen(true);
  };

  const handleDeleteAuthor = (id: string) => {
    setAlert({
      message: "Tem certeza que deseja excluir este autor?",
      type: "error",
      isOpen: true,
      onConfirm: () => {
        deleteAuthor(id);
        setAlert({
          message: "Autor excluído com sucesso",
          type: "success",
          isOpen: true,
        });
      },
    });
  };

  const handleCreateOrUpdateAuthor = (author: Author) => {
    if (author.id) {
      updateAuthor(author);
      setAlert({
        message: "Autor atualizado com sucesso",
        type: "success",
        isOpen: true,
      });
    } else {
      addAuthor(author);
      setAlert({
        message: "Autor criado com sucesso",
        type: "success",
        isOpen: true,
      });
    }
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Autores</PageTitle>
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
          placeholder="Pesquisar por nome ou email do autor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          onClick={() => {
            setSelectedAuthor(null);
            setIsModalOpen(true);
          }}
        >
          Novo Autor
        </Button>
      </SearchContainer>
      <Table data={filteredAuthors} columns={columns} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedAuthor ? "Atualizar Autor" : "Novo Autor"}
      >
        <AuthorForm
          author={selectedAuthor}
          onSubmit={handleCreateOrUpdateAuthor}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </PageContainer>
  );
};
