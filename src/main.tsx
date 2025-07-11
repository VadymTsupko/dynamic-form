import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./app/store";

async function prepareWorker() {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
  ) {
    const { worker } = await import("../mocks/worker");
    return worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js"
      }
    });
  }

  return Promise.resolve();
}

prepareWorker()
  .then(() => {
    const container = document.getElementById("root");

    if (container) {
      const root = createRoot(container);

      root.render(
        <StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </StrictMode>
      );
    } else {
      throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
      );
    }
  })
  .catch((reason: unknown) => {
    console.error("Worker error", reason);
  });
