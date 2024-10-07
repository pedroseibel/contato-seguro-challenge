import styled from "styled-components";

export const TableWrapper = styled.div`
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
`;

export const Td = styled.td`
  padding: 12px 16px;
  border-top: 1px solid #dee2e6;
`;

export const TrBody = styled.tr`
  &:nth-of-type(even) {
    background-color: #f8f9fa;
  }
`;

export const MobileCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
`;

export const MobileCardItem = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    display: inline-block;
    margin-right: 8px;
    font-weight: bold;
  }
`;