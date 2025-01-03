import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Local imports
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);