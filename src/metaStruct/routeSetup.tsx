// Your router setup file

import { routePaths } from "./routesConfig";
import { getLazyComponent } from "./lazyLoaders";
import { RouteDefinition } from "@solidjs/router/dist/types";

const routes: RouteDefinition[] = routePaths.map(({ title, path }) => ({
  component: getLazyComponent(title),
  path: path,
}));

export { routes };
