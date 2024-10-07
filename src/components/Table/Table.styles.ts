import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const Th = styled.th`
  background-color: #f8f9fa;
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
`;

export const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #dee2e6;
`;

export const TrBody = styled.tr`
  &:hover {
    background-color: #f8f9fa;
  }
`;