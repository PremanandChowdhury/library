import PropTypes from "prop-types";
import { Fragment } from "react";

const Table = ({ data, config, getKeyFn }) => {
  const renderHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return <th className="border p-3" key={column.label}>{column.label}</th>;
  });

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
        <thead>
          <tr>{renderHeader}</tr>
        </thead>
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
