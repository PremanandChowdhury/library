import React from "react";

// Local imports
import "./App.css";
import { CarForm } from "./components";

const App: React.FC = () => {
  return (
    <>
      <h1>Vehicle Management</h1>
      <CarForm />
    </>
  );
};

export default App;
