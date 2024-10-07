import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../../components/Button/Button";
import { Author } from "../../models/index";
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;

interface AuthorFormProps {
  author: Author | null;
  onSubmit: (author: Author) => void;
  onCancel: () => void;
}

export const AuthorForm: React.FC<AuthorFormProps> = ({
  author,
  onSubmit,
  onCancel,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Author>({
    defaultValues: author || {
      id: "",
      name: "",
      email: "",
    },
  });

  const onSubmitForm = (data: Author) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormGroup>
        <Label htmlFor="name">Nome</Label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Nome é obrigatório" }}
          render={({ field }) => <Input {...field} id="name" />}
        />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} id="email" />}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>

      <div style={{ display: "flex", gap: "8px" }}>
        <Button type="submit">{author ? "Atualizar" : "Novo"} Autor</Button>
        <Button type="button" onClick={onCancel} style={{backgroundColor: "red"}}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};
