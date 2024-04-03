import { createSignal, For, Show } from "solid-js";
import { createSolidTable } from "@tanstack/solid-table";
import { createVirtualizer } from "@tanstack/solid-virtual";

function App() {
  // Sample data
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
  ];

  const data = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  // Setup the table instance
  const table = createSolidTable({
    data,
    columns,
    getCoreRowModel: get,
    filterFns: {
      fuzzy: () => false, // Assign a function that returns false instead of undefined
    },
  });

  // Create a virtualizer instance for rows
  const parentRef = createSignal();
  const rowVirtualizer = createVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef[0]() as Element | null, // Cast the value of parentRef[0]() to Element | null
    estimateSize: () => 35, // Adjust based on row height
    overscan: 5,
  });

  return (
    <div>
      <div ref={parentRef} style={{ height: "500px", overflow: "auto" }}>
        <table>
          import {Headers} from '@tanstack/solid-table';
          <thead>
            <tr>
              <For each={table.getHeaderGroups()}>
                {(headerGroup) => (
                  <For each={headerGroup.headers}>
                    {(
                      header: Header<{ id: number; name: string }, unknown>
                    ) => <th>{header.renderHeader()}</th>}
                  </For>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <For each={rowVirtualizer.getVirtualItems()}>
              {(virtualRow) => {
                import { Accessor, Row } from "@tanstack/solid-table";

                const row = table.getRowModel().rows[virtualRow.index];
                return (
                  <Show when={row}>
                    {(row) => (
                      <tr
                        style={{
                          position: "absolute",
                          top: `${virtualRow.start}px`,
                          width: "100%",
                        }}
                      >
                        <For
                          each={row.getVisibleCells() as Accessor<Cell<any>>[]}
                        >
                          {(cell) => <td>{cell.renderCell()}</td>}
                        </For>
                      </tr>
                    )}
                  </Show>
                );
              }}
            </For>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
function get(table: Table<any>): () => RowModel<any> {
  throw new Error("Function not implemented.");
}
