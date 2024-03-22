import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { Suspense } from "solid-js";
import Layout from "./routes/layout/layout03";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <div>
        <Title>SolidStart TanStack Tailwind</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </div>
      <div class="m-0 p-0">
        <Suspense>
          <Layout />
        </Suspense>
      </div>
    </MetaProvider>
  );
}
