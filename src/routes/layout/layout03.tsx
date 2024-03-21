import { useLocation } from "@solidjs/router";
// import { FileRoutes } from "@solidjs/start/router";
// import "../../app.css";
import MenuItems from "./menuItems/menuItems03";
import { Suspense, createSignal, lazy } from "solid-js";
import { Router } from "@solidjs/router";
import { RouteDefinition } from "@solidjs/router/dist/types";
import { routes } from "../../metaStruct/routeDef";

export default function Layout() {
  // const location = useLocation();
  const [isMenubarOpen, setIsMenubarOpen] = createSignal(true); // Menubar toggle state
  const active = (path: string) =>
    path == location.pathname
      ? "border-stone-700"
      : "border-transparent hover:border-stone-800";
  const mainContentMargin = isMenubarOpen() ? "ml-64" : "ml-0";

  // const routes: RouteDefinition[] = [
  //   { component: lazy(() => import("../index")), path: "/" },
  //   { component: lazy(() => import("../about")), path: "/about" },
  //   {
  //     component: lazy(() => import("../tables/basic/tableBasicRoot")),
  //     path: "/tables/basic/tableBasicRoot",
  //   },
  //   {
  //     component: lazy(
  //       () => import("../tables/column-groups/rootColumnGroup01")
  //     ),
  //     path: "/tables/column-groups/rootColumnGroup01",
  //   },
  //   {
  //     component: lazy(
  //       () => import("../tables/column-groups/rootColumnGroup02")
  //     ),
  //     path: "/tables/column-groups/rootColumnGroup02",
  //   },
  //   {
  //     component: lazy(() => import("../tableBasicRoot")),
  //     path: "/tableBasicRoot",
  //   },
  //   {
  //     component: lazy(
  //       () => import("../tables/column-ordering/columnOrdering01")
  //     ),
  //     path: "/tables/column-ordering/columnOrdering01",
  //   },
  //   {
  //     component: lazy(() => import("../tables/column-visibility/visibility01")),
  //     path: "/tables/column-visibility/visibility01",
  //   },
  //   {
  //     component: lazy(() => import("../tables/sorting/App")),
  //     path: "/tables/sorting/App",
  //   },
  //   {
  //     component: lazy(() => import("../tables/sorting/sorting01")),
  //     path: "/tables/sorting/sorting01",
  //   },

  //   {
  //     component: lazy(() => import("../tables/filter01/filter")),
  //     path: "/tables/filter01/filter",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter01")),
  //     path: "/tables/filter01/filter01",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter02")),
  //     path: "/tables/filter01/filter02",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03")),
  //     path: "/tables/filter01/filter03",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03a")),
  //     path: "/tables/filter01/filter03a",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03b")),
  //     path: "/tables/filter01/filter03b",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03c")),
  //     path: "/tables/filter01/filter03c",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03d")),
  //     path: "/tables/filter01/filter03d",
  //   },

  //   {
  //     component: lazy(() => import("../tables/filter01/filter03d1")),
  //     path: "/tables/filter01/filter03d1",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03d2")),
  //     path: "/tables/filter01/filter03d2",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filter01/filter03e")),
  //     path: "/tables/filter01/filter03e",
  //   },

  //   {
  //     component: lazy(() => import("../tables/filter02/simpleFilter01")),
  //     path: "/tables/filter02/simpleFilter01",
  //   },

  //   {
  //     component: lazy(() => import("../trial/signal01")),
  //     path: "/trial/signal01",
  //   },

  //   {
  //     component: lazy(() => import("../tables/filterDebounce/filterDb01")),
  //     path: "/tables/filterDebounce/filterDb01",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filterDebounce/filterDb02")),
  //     path: "/tables/filterDebounce/filterDb02",
  //   },
  //   {
  //     component: lazy(
  //       () => import("../tables/filterDebounce/simpleDebounceTest")
  //     ),
  //     path: "/tables/filterDebounce/simpleDebounceTest",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filterDebounce/filterDb03")),
  //     path: "/tables/filterDebounce/filterDb03",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filterDebounce/filterDb04")),
  //     path: "/tables/filterDebounce/filterDb04",
  //   },
  //   {
  //     component: lazy(() => import("../tables/filterDebounce/filterDb05")),
  //     path: "/tables/filterDebounce/filterDb05",
  //   },
  //   {
  //     component: lazy(() => import("../virtualisation/virtualize02")),
  //     path: "/virtualisation/virtualize02",
  //   },
  //   {
  //     component: lazy(() => import("../virtualisation/virtualize03")),
  //     path: "/virtualisation/virtualize03",
  //   },
  //   {
  //     component: lazy(() => import("../tables/virtualized-rows/main")),
  //     path: "/tables/virtualized-rows/main",
  //   },
  //   {
  //     component: lazy(() => import("../tables/virtualized-rows/vSort01")),
  //     path: "/tables/virtualized-rows/vSort01",
  //   },
  //   {
  //     component: lazy(() => import("../tables/virtualized-rows/vSort02")),
  //     path: "/tables/virtualized-rows/vSort02",
  //   },
  // ];

  return (
    <div class="flex flex-col h-screen">
      <div class="bg-stone-900 sticky top-0 z-40 h-12">
        <nav class="flex items-center justify-between text-stone-200">
          {/* Hamburger Icon for smaller screens */}
          <div class="p-4">
            <button onClick={() => setIsMenubarOpen(!isMenubarOpen())}>
              <div class="px-2 text-xs rounded-sm font-semibold text-stone-100 hover:text-lg">
                Menu
              </div>
            </button>
          </div>
          <div class="pr-8 font-bold">
            Current SolidJs version - TanStack Table | SolidJs
          </div>
        </nav>
      </div>
      <div class="flex flex-grow max-h-[calc(100%-3rem)]">
        {/* Menubar */}
        <div
          class={`xl:w-80 min-w-[16rem] ${
            isMenubarOpen() ? "flex" : "hidden"
          } 2xl:flex flex-col`}
        >
          {/* Menu Header */}
          <div class="p-4 bg-stone-900 ">
            <h1 class="font-thin text-md text-stone-400">Menu Header</h1>
            <div class="text-xs hover:text-md text-orange-500 hover:bg-stone-100 hover:font-bold hover:p-2 rounded-md">
              <div>strikethrough -</div>
              WIP or Rework required
            </div>
          </div>

          {/* Menu Content */}
          <div class="flex-grow overflow-y-auto max-h-[calc(100%-7rem)] bg-stone-800">
            <div class="py-4 rounded-lg text-stone-100">
              <div class="flex flex-col text-sm">
                <MenuItems />
              </div>
            </div>
          </div>

          {/* Menu Footer */}
          <div class="p-4 bg-stone-900 ">
            <h1 class="font-thin text-md text-stone-400">Menu Footer</h1>
          </div>
        </div>

        {/* Main Content Area */}
        <div class={`flex-grow overflow-y-auto`}>
          <Suspense>
            {/* <div class={`flex-grow overflow-y-auto`}> */}
            <Router>{routes}</Router>
            {/* </div> */}
          </Suspense>
          {/* <Route>
            <FileRoutes />
          </Route> */}
          {/* <Router root={props => <Suspense>{props.children}</Suspense>}> */}
          {/* <FileRoutes /> */}
          {/* </Router> */}
        </div>
      </div>
    </div>
  );
}
