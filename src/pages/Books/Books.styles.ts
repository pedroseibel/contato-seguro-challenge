import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
`;

export const PageHeader = styled.div`
  margin-bottom: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
  min-width: 150px;
`;

export const ActionButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
`;