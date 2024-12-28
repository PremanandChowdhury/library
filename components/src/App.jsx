import ErrorBoundary from "./components/ErrorBoundary";
import { NavigationProvider } from "./context/navigation";

// Local imports
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ButtonListPage from "./pages/ButtonListPage";
import Route from "./components/Route";
import Sidebar from "./components/ui/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import CounterPage2 from "./pages/CounterPage2";

const App = () => {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <div className="container mx-auto mt-4 grid h-[90vh] grid-cols-6 gap-4">
          <Sidebar />
          <div className="col-span-5 w-full bg-gray-50 p-4">
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
            <Route path="/table">
              <TablePage />
            </Route>
            <Route path="/counter">
              <CounterPage intitialCount={10} />
            </Route>
            <Route path="/counter2">
              <CounterPage2 initialCount={10} />
            </Route>
          </div>
        </div>
      </NavigationProvider>
    </ErrorBoundary>
  );
};

export default App;
