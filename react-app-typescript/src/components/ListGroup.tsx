function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <h2>No Items Found</h2>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
