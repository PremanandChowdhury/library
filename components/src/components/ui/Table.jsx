import PropTypes from "prop-types";

const Table = ({ data, config, getKeyFn }) => {
  const renderHeader = () => (
    <tr>
      {config.map((column) => (
        <th key={column.label} className="border p-3">
          {column.label}
        </th>
      ))}
    </tr>
  );

  const renderRow = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className="border p-3">
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className="p-3" key={getKeyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

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
  config: PropTypes.array.isRequired,
  getKeyFn: PropTypes.func.isRequired,
};

export default Table;
