// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="author" content="Szymon Wieczorek" />
        <meta name="description" content="Short informational about Canary Islands" />
        <meta name="keywords" content="shateq, shateq.cf" />
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Routes />

            <Footer />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
