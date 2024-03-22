import {
  flexRender,
  getCoreRowModel,
  VisibilityState,
  ColumnDef,
  createSolidTable,
} from "@tanstack/solid-table";
import { createSignal, For, Show } from "solid-js";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      {
        accessorKey: "firstName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
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
  const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
    {}
  );
  const rerender = () => setData(defaultData);

  const table = createSolidTable({
    get data() {
      return data();
    },
    columns: defaultColumns,
    state: {
      get columnVisibility() {
        return columnVisibility();
      },
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: (value: any, filterValue: any) => {
        // Implement your fuzzy filter logic here
        return true; // Replace with your actual fuzzy filter logic
      },
    },
  });

  return (
    <div class="text-sm">
      <div class="text-xs bg-stone-100 p-2 m-2">
        Note: visibility | /tables/column-visibility/visibility01| Visbility01
      </div>
      <div class="flex p-2">
        <div class="flex-col gap-4" />
        <div class="bg-stone-300 w-48 p-2 m-2 inline-block border border-black shadow rounded">
          <div class="border-b border-black">
            <label>
              <input
                checked={table.getIsAllColumnsVisible()}
                onChange={table.getToggleAllColumnsVisibilityHandler()}
                type="checkbox"
              />{" "}
              Toggle All
            </label>
          </div>
          <For each={table.getAllLeafColumns()}>
            {(column) => (
              <div class="px-1">
                <label>
                  <input
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                    type="checkbox"
                  />{" "}
                  {column.id}
                </label>
              </div>
            )}
          </For>
        </div>
        <div>
          <table>
            <thead class="bg-stone-200">
              <For each={table.getHeaderGroups()}>
                {(headerGroup) => (
                  <tr>
                    <For each={headerGroup.headers}>
                      {(header) => (
                        <th colSpan={header.colSpan}>
                          <Show when={!header.isPlaceholder}>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </Show>
                        </th>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </thead>
            <tbody>
              <For each={table.getRowModel().rows}>
                {(row) => (
                  <tr class="bg-stone-100">
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
        </div>
        <div />
      </div>

      <div class="flex-row">
        <button
          onClick={() => rerender()}
          class="m-4 p-2 bg-stone-500 text-slate-50 rounded"
        >
          Rerender
        </button>
        <div class="h-4" />
        <pre>{JSON.stringify(table.getState().columnVisibility, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
