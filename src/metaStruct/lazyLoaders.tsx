import { lazy } from "solid-js";
import { routePaths } from "./routesConfig";

let componentMap: { [title: string]: any } = {};

routePaths.forEach(({ title, importPath }) => {
  componentMap[title] = lazy(() => import(/* @vite-ignore */ `${importPath}`));
});

export function getLazyComponent(title: string) {
  return componentMap[title];
}
