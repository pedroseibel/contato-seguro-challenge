# Desafio CRUD Contato Seguro

Este projeto é uma aplicação CRUD para gerenciamento de livros e autores, desenvolvida como parte do desafio técnico da Contato Seguro.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Styled Components
- React Hook Form
- Radix UI
- TanStack Table

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn

## Iniciando o Projeto

1. Clone o repositório:
   ```
   git clone https://github.com/seu-usuario/desafio-contato-seguro.git
   cd desafio-contato-seguro
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Abra seu navegador e acesse `http://localhost:5173`

## Construindo para Produção

Para criar uma build de produção:

npm run build


Os arquivos compilados estarão no diretório `dist`.

## Estrutura do Projeto

- `src/`: Código-fonte
  - `components/`: Componentes React reutilizáveis
  - `contexts/`: Contexto React para gerenciamento de estado
  - `hooks/`: Hooks React personalizados
  - `models/`: Interfaces TypeScript para modelos de dados
  - `pages/`: Componentes principais de páginas
  - `styles/`: Estilos globais e tema
  - `utils/`: Funções utilitárias

## Funcionalidades

- Criar, ler, atualizar e excluir livros e autores
- Formulários modais para criação e edição
- Alertas de confirmação para exclusões
- Persistência em Local Storage
- Design responsivo

## Estilo de Código e Linting

Este projeto utiliza ESLint para linting de código. Para executar o linter:

npm run lint


## Padrões de Projeto e Considerações de Engenharia

### Padrão de Composição

O projeto faz uso extensivo do padrão de composição, especialmente nos componentes React. Isso permite uma maior flexibilidade e reutilização de código. Por exemplo:

- O componente `Modal` é composto por subcomponentes menores, como `ModalOverlay` e `ModalContent`.
- O `Table` é construído usando composição com componentes como `Th`, `Td`, e `TrBody`.

Este approach facilita a manutenção e extensão dos componentes, permitindo uma melhor separação de responsabilidades.

### Gerenciamento de Estado

Utilizamos o Context API do React para gerenciamento de estado global, evitando prop drilling e mantendo um fluxo de dados mais limpo e previsível.

### Hooks Personalizados

Hooks personalizados, como `useLocalStorage`, encapsulam lógicas complexas e promovem a reutilização de código em diferentes partes da aplicação.

### Tipagem Forte

O uso de TypeScript proporciona uma camada adicional de segurança, reduzindo erros e otimizando o tempo de desenvolvimento.

### Componentização

A estrutura do projeto favorece a criação de componentes pequenos e reutilizáveis, seguindo o princípio de responsabilidade única.

## Considerações Finais

- A aplicação utiliza Local Storage para persistência de dados. Em um ambiente de produção, considere usar uma solução mais robusta.
- O design é responsivo, mas recomenda-se testes adicionais em diversos dispositivos.
- A arquitetura foi pensada para ser escalável, permitindo fácil adição de novas funcionalidades no futuro.
