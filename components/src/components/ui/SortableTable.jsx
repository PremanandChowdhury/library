import { useState } from "react";
import PropTypes from "prop-types";

// Local imports
import Table from "./Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  
  const { config, data } = props;

  // Function to handle the click event
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Updated coonfig array with header function
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => {
        return (
          <th className="border p-3" onClick={() => handleClick(column.label)}>
            {column.label}
          </th>
        );
      },
    };
  });

  // sort only whern sortOrder and sortBy are not null
  // Make  a copy of the 'data' from the prop
  // Find the correct sortValue function and use it for sorting

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else if (typeof valueA === "number") {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

SortableTable.propTypes = {
  props: PropTypes.object,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      sortValue: PropTypes.any,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
};

export default SortableTable;
