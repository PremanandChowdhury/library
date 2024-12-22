import { useState } from "react";
import Dropdown from "../components/ui/Dropdown";

const DropdownPage = () => {
  const [selectedOption, setSelecedState] = useState();
  const [selectedOption2, setSelecedState2] = useState();

  const colors = [
    {
      id: 1,
      label: "Red",
      value: "red",
    },
    {
      id: 2,
      label: "Blue",
      value: "blue",
    },
    {
      id: 3,
      label: "Green",
      value: "green",
    },
  ];
  const fruits = [
    {
      id: 1,
      label: "Apple",
      value: "apple",
    },
    {
      id: 2,
      label: "Banana",
      value: "banana",
    },
    {
      id: 3,
      label: "Orange",
      value: "orange",
    },
  ];

  const handleSelection = (option) => {
    console.log(option);
    setSelecedState(option);
  };
  const handleSelection2 = (option) => {
    console.log(option);
    setSelecedState2(option);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <Dropdown
        options={colors}
        value={selectedOption}
        onChange={handleSelection}
      />
      <Dropdown
        options={fruits}
        value={selectedOption2}
        onChange={handleSelection2}
      />
    </div>
  );
};

export default DropdownPage;
