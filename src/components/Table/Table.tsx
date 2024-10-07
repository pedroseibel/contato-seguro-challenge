import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { TableWrapper, StyledTable, Th, Td, TrBody, MobileCard, MobileCardItem } from "./Table.styles";
import { useWindowSize } from "../../hooks/useWindowSize";

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function Table<T extends object>({ data, columns }: TableProps<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { width } = useWindowSize();
  const isMobile = width <= 768;

  return (
    <TableWrapper>
      {isMobile ? (
        <>
          {table.getRowModel().rows.map((row) => (
            <MobileCard key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <MobileCardItem key={cell.id}>
                  <strong>{cell.column.columnDef.header as string}:</strong>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </MobileCardItem>
              ))}
            </MobileCard>
          ))}
        </>
      ) : (
        <StyledTable>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <TrBody key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </TrBody>
            ))}
          </tbody>
        </StyledTable>
      )}
    </TableWrapper>
  );
}