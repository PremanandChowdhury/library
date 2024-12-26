import PropTypes from "prop-types";

const Table = ({ data }) => {
  const keys = Object.keys(data[0]);
  const renderHeader = () => (
    <tr>
      {keys.map((key) => (
        <th key={key} className="border p-3">
          {key.charAt(0).toUpperCase() + key.slice(1)}
        </th>
      ))}
    </tr>
  );

  const renderRow = data.map((item, index) => (
    <tr className="p-3" key={item.name + index}>
      <td className="border p-3">{item.name}</td>
      <td className="border p-3">
        <div className={`mx-auto h-5 w-5 rounded-full ${item.color}`}></div>
      </td>
      <td className="border p-3">{item.score}</td>
    </tr>
  ));

  return (
    <>
      <table className="w-full table-auto border-spacing-2">
        <thead>{renderHeader()}</thead>
        <tbody>{renderRow}</tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
