import Table from "../components/ui/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 2 },
    { name: "Apple", color: "bg-red-500", score: 6 },
    { name: "Banana", color: "bg-yellow-500", score: 4 },
    { name: "Grapes", color: "bg-purple-500", score: 8 },
    { name: "Guava", color: "bg-green-500", score: 3 },
    { name: "Lemon", color: "bg-lime-500", score: 5 },
  ];
  const config = [
    {
      label: "Name of fruits",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`mx-auto h-4 w-4 rounded-full ${fruit.color}`}></div>
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const getKeyFn = (data) => {
    return data.name;
  }

  return (
    <div>
      <Table data={data} config={config} getKeyFn={getKeyFn} />
    </div>
  );
};

export default TablePage;
