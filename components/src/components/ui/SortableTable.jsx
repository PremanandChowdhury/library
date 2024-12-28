import PropTypes from "prop-types";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

// Local imports
import Table from "./Table";
import useSort from "../../hooks/useSort";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(data, config);

  // Updated coonfig array with header function
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => {
        return (
          <th
            className="cursor-pointer border p-3 hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center gap-1">
              {getIcons(column.label, sortOrder, sortBy)}
              {column.label}
            </div>
          </th>
        );
      },
    };
  });

  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
};

function getIcons(label, sortOrder, sortBy) {
  if (label !== sortBy) {
    return (
      <div>
        <MdOutlineKeyboardArrowUp />
        <MdOutlineKeyboardArrowDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <MdOutlineKeyboardArrowUp />
        <MdOutlineKeyboardArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return <MdOutlineKeyboardArrowUp />;
  } else if (sortOrder === "desc") {
    return <MdOutlineKeyboardArrowDown />;
  }
}

SortableTable.propTypes = {
  props: PropTypes.object,
  config: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      render: PropTypes.func,
      sortValue: PropTypes.func,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortableTable;
