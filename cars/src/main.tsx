import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.css";

// Local imports
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
