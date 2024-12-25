import ErrorBoundary from "./components/ErrorBoundary";
import { NavigationProvider } from "./context/navigation";

// Local imports
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonListPage from "./pages/ButtonListPage";
import Link from "./components/Link";
import Route from "./components/Route";

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        {/* 
          <ButtonListPage />
          <AccordionPage />
          <DropdownPage /> 
        */}

        {/* Link component usage */}
        <Link to="/accordion">Accordion</Link>
        <Link to="/dropdown">Dropdown</Link>
        
        {/* Route component usage */}
        <Route path="/accordion"><AccordionPage /></Route>
        <Route path="/dropdown"><DropdownPage /></Route>
        <Route path="/buttons-list"><ButtonListPage /></Route>

      </NavigationProvider>
    </ErrorBoundary>
  );
};

export default App;
