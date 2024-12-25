import AccordionPage from "./pages/AccordionPage";
import ButtonListPage from "./pages/ButtonListPage";
import ErrorBoundary from "./components/ErrorBoundary";
import { NavigationProvider } from "./context/navigation";
import DropdownPage from "./pages/DropdownPage";

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <ButtonListPage />
        <AccordionPage />
        <DropdownPage />
      </NavigationProvider>
    </ErrorBoundary>
  );
};

export default App;
