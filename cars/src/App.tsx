import React from "react";

// Local imports
import "./App.css";
import { CarForm, CarList, CarSearch, CarValue } from "./components";

const App: React.FC = () => {
  return (
    <div className="container is-fluid">
      <h1>Vehicle Management</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
