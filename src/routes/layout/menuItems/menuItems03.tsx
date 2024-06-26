import "../../../app.css";

export default function menuItems() {
  const menuData = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    {
      path: "/tables/basic/tableBasicRoot",
      title: "TableBasic03",
      hasSeparator: true,
    },
    { path: "/tables/column-groups/rootColumnGroup01", title: "ColumnGroup01" },
    { path: "/tables/column-groups/rootColumnGroup02", title: "ColumnGroup02" },
    { path: "/tableBasicRoot", title: "TableBasic04" },
    {
      path: "/tables/column-ordering/columnOrdering01",
      title: "ColumnOrdering01",
    },
    { path: "/tables/column-visibility/visibility01", title: "Visibility01" },
    { path: "/tables/sorting/App", title: "Layout Example 02", issues: true },
    { path: "/tables/sorting/sorting01", title: "Sorting01" },

    { path: "/tables/filter01/filter", title: "Filter", hasSeparator: true },
    { path: "/tables/filter01/filter01", title: "Filter01" },
    { path: "/tables/filter01/filter02", title: "Filter02" },
    { path: "/tables/filter01/filter03", title: "Filter03" },
    { path: "/tables/filter01/filter03a", title: "Filter03a" },
    { path: "/tables/filter01/filter03b", title: "Filter03b", issues: true },
    { path: "/tables/filter01/filter03b1", title: "Filter03b1", issues: false },
    { path: "/tables/filter01/filter03c", title: "Filter03c" },
    { path: "/tables/filter01/filter03d", title: "Filter03d", issues: false },

    { path: "/tables/filter01/filter03d1", title: "Filter03d1", issues: true },
    { path: "/tables/filter01/filter03d2", title: "Filter03d2", issues: true },
    { path: "/tables/filter01/filter03e", title: "Filter03e" },

    {
      path: "/tables/filter02/simpleFilter01",
      title: "SimpleFilter01",
      issues: true,
    },

    { path: "/trial/signal01", title: "Signal01", hasSeparator: true },

    {
      path: "/tables/filterDebounce/filterDb01",
      title: "FilterDb01 DebouncePlay ex 03d2",
      hasSeparator: true,
      issues: true,
    },
    {
      path: "/tables/filterDebounce/filterDb02",
      title: "FilterDb02",
      issues: true,
    },
    {
      path: "/tables/filterDebounce/simpleDebounceTest",
      title: "SimpleDebounceTest",
      issues: true,
    },
    {
      path: "/tables/filterDebounce/filterDb03",
      title: "FilterDb03",
    },
    {
      path: "/tables/filterDebounce/filterDb04",
      title: "FilterDb04",
    },
    {
      path: "/tables/filterDebounce/filterDb05",
      title: "FilterDb05",
    },
    {
      path: "/virtualisation/virtualize02",
      title: "Virtualize02",
      hasSeparator: true,
      issues: true,
    },
    {
      path: "/virtualisation/virtualize03",
      title: "Virtualize03",
    },
    {
      path: "/tables/virtualized-rows/main",
      title: "Virtualized Rows Base",
      hasSeparator: true,

      issues: true,
    },
    {
      path: "/tables/virtualized-rows/vSort01",
      title: "Virtualized Rows 01",
      issues: true,
    },
    {
      path: "/tables/virtualized-rows/vSort02",
      title: "Virtualized Rows 02",
    },
    {
      path: "/tables/virtualized-rows/vSort03",
      title: "Virtualized Rows 03",
    },
  ];

  return (
    <>
      {menuData.map((item) => (
        <>
          {item.hasSeparator && (
            <div class="border-b border-gray-300 my-2"></div>
          )}
          <div
            class={`py-1 px-2 ml-4 mr-16 hover:bg-stone-100 hover:text-stone-800 hover:p-2 hover:font-bold rounded-md`}
          >
            <a
              href={item.path}
              class={item.issues ? "text-orange-500 line-through" : ""}
            >
              {item.title}
            </a>
          </div>
        </>
      ))}
    </>
  );
}
