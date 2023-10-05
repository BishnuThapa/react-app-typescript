import { useState } from "react";

function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  // using the useState hook we can tell the react app that this component can have data or state that will change overtime.
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <h2>No Items Found</h2>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
