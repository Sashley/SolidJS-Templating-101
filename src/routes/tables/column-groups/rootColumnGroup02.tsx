import {
  flexRender,
  getCoreRowModel,
  ColumnDef,
  createSolidTable,
} from "@tanstack/solid-table";
import { createSignal, For } from "solid-js";
import { defaultData, Person } from "../../data/people";

const defaultColumns: ColumnDef<Person>[] = [
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        header: () => "First Name",
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => "Last Name",
        footer: (props) => props.column.id,
      },
    ],
  },
  {
    header: "Info",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "age",
        header: () => "Age",
        footer: (props) => props.column.id,
      },
      {
        header: "More Info",
        columns: [
          {
            accessorKey: "visits",
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "status",
            header: "Status",
            footer: (props) => props.column.id,
          },
          {
            accessorKey: "progress",
            header: "Profile Progress",
            footer: (props) => props.column.id,
          },
        ],
      },
    ],
  },
];

function App() {
  const [data, setData] = createSignal(defaultData);
  const rerender = () => setData(defaultData);

  const table = createSolidTable({
    get data() {
      return data();
    },
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: (value: any, filterValue: any) => {
        // Implement your fuzzy filter logic here
        return true;
      },
    },
  });

  return (
    <div>
      <div class="text-xs bg-stone-100 p-2 m-2">
        Note: basic column table r2 | /tables/column-groups/rootColumnGroup02 |
        ColumnGroup02
      </div>
      <table class="p-2 m-2 bg-stone-50 text-sm">
        <thead class="p-4">
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr class="bg-stone-200">
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th class="text-left bg-stone-300" colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody class="p-4 bg-stone-200">
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
      <div class="h-4" />
      <button
        onClick={() => rerender()}
        class="border p-2 bg-stone-300 rounded-md"
      >
        Rerender
      </button>
    </div>
  );
}

export default App;
