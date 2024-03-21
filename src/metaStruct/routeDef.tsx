import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router/dist/types";

export const routes: RouteDefinition[] = [
  { component: lazy(() => import("../routes/index")), path: "/" },
  { component: lazy(() => import("../routes/about")), path: "/about" },
  {
    component: lazy(() => import("../routes/tables/basic/tableBasicRoot")),
    path: "/tables/basic/tableBasicRoot",
  },
  {
    component: lazy(
      () => import("../routes/tables/column-groups/rootColumnGroup01")
    ),
    path: "/tables/column-groups/rootColumnGroup01",
  },
  {
    component: lazy(
      () => import("../routes/tables/column-groups/rootColumnGroup02")
    ),
    path: "/tables/column-groups/rootColumnGroup02",
  },
  {
    component: lazy(() => import("../routes/tableBasicRoot")),
    path: "/tableBasicRoot",
  },
  {
    component: lazy(
      () => import("../routes/tables/column-ordering/columnOrdering01")
    ),
    path: "/tables/column-ordering/columnOrdering01",
  },
  {
    component: lazy(
      () => import("../routes/tables/column-visibility/visibility01")
    ),
    path: "/tables/column-visibility/visibility01",
  },
  {
    component: lazy(() => import("../routes/tables/sorting/App")),
    path: "/tables/sorting/App",
  },
  {
    component: lazy(() => import("../routes/tables/sorting/sorting01")),
    path: "/tables/sorting/sorting01",
  },

  {
    component: lazy(() => import("../routes/tables/filter01/filter")),
    path: "/tables/filter01/filter",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter01")),
    path: "/tables/filter01/filter01",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter02")),
    path: "/tables/filter01/filter02",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03")),
    path: "/tables/filter01/filter03",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03a")),
    path: "/tables/filter01/filter03a",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03b")),
    path: "/tables/filter01/filter03b",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03c")),
    path: "/tables/filter01/filter03c",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03d")),
    path: "/tables/filter01/filter03d",
  },

  {
    component: lazy(() => import("../routes/tables/filter01/filter03d1")),
    path: "/tables/filter01/filter03d1",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03d2")),
    path: "/tables/filter01/filter03d2",
  },
  {
    component: lazy(() => import("../routes/tables/filter01/filter03e")),
    path: "/tables/filter01/filter03e",
  },

  {
    component: lazy(() => import("../routes/tables/filter02/simpleFilter01")),
    path: "/tables/filter02/simpleFilter01",
  },

  {
    component: lazy(() => import("../routes/trial/signal01")),
    path: "/trial/signal01",
  },

  {
    component: lazy(() => import("../routes/tables/filterDebounce/filterDb01")),
    path: "/tables/filterDebounce/filterDb01",
  },
  {
    component: lazy(() => import("../routes/tables/filterDebounce/filterDb02")),
    path: "/tables/filterDebounce/filterDb02",
  },
  {
    component: lazy(
      () => import("../routes/tables/filterDebounce/simpleDebounceTest")
    ),
    path: "/tables/filterDebounce/simpleDebounceTest",
  },
  {
    component: lazy(() => import("../routes/tables/filterDebounce/filterDb03")),
    path: "/tables/filterDebounce/filterDb03",
  },
  {
    component: lazy(() => import("../routes/tables/filterDebounce/filterDb04")),
    path: "/tables/filterDebounce/filterDb04",
  },
  {
    component: lazy(() => import("../routes/tables/filterDebounce/filterDb05")),
    path: "/tables/filterDebounce/filterDb05",
  },
  {
    component: lazy(() => import("../routes/virtualisation/virtualize02")),
    path: "/virtualisation/virtualize02",
  },
  {
    component: lazy(() => import("../routes/virtualisation/virtualize03")),
    path: "/virtualisation/virtualize03",
  },
  {
    component: lazy(() => import("../routes/tables/virtualized-rows/main")),
    path: "/tables/virtualized-rows/main",
  },
  {
    component: lazy(() => import("../routes/tables/virtualized-rows/vSort01")),
    path: "/tables/virtualized-rows/vSort01",
  },
  {
    component: lazy(() => import("../routes/tables/virtualized-rows/vSort02")),
    path: "/tables/virtualized-rows/vSort02",
  },
];
