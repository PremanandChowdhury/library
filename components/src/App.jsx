import ErrorBoundary from "./components/ErrorBoundary";
import { NavigationProvider } from "./context/navigation";

// Local imports
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonListPage from "./pages/ButtonListPage";
import Route from "./components/Route";
import Sidebar from "./components/ui/Sidebar";
import ModalPage from "./pages/ModalPage";

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <div className="container mx-auto mt-4 grid grid-cols-6 gap-4 h-[90vh]">
          <Sidebar />
          <div className="w-full bg-gray-50 col-span-5 p-4">
            {/* Route component usage */}
            <Route path="/accordion">
              <AccordionPage />
            </Route>
            <Route path="/">
              <DropdownPage />
            </Route>
            <Route path="/buttons">
              <ButtonListPage />
            </Route>
            <Route path="/modal">
              <ModalPage />
            </Route>
          </div>
        </div>
      </NavigationProvider>
    </ErrorBoundary>
  );
};

export default App;
