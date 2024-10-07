import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Book, Author } from "../../models/index";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

interface BookFormProps {
  book: Book | null;
  authors: Author[];
  onSubmit: (book: Book) => void;
  onCancel: () => void;
}

export const BookForm: React.FC<BookFormProps> = ({
  book,
  authors,
  onSubmit,
  onCancel,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Book>({
    defaultValues: book || {
      id: "",
      name: "",
      author_id: "",
      pages: undefined,
    },
  });

  const onSubmitForm = (data: Book) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormGroup>
        <Label htmlFor="name">Nome do livro</Label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Nome do livro é obrigatório" }}
          render={({ field }) => <Input {...field} id="name" />}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="author_id">Autor</Label>
        <Controller
          name="author_id"
          control={control}
          rules={{ required: "Autor é obrigatório" }}
          render={({ field }) => (
            <Select {...field} id="author_id">
              <option value="">Selecione um autor</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </Select>
          )}
        />
        {errors.author_id && (
          <ErrorMessage>{errors.author_id.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="pages">Número de páginas</Label>
        <Controller
          name="pages"
          control={control}
          rules={{
            min: {
              value: 1,
              message: "O número de páginas deve ser maior que zero",
            },
          }}
          render={({ field }) => <Input {...field} id="pages" type="number" />}
        />
        {errors.pages && <ErrorMessage>{errors.pages.message}</ErrorMessage>}
      </FormGroup>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button type="submit">{book ? "Atualizar" : "Novo"} Livro</Button>
        <Button type="button" onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};
