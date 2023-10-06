import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Button onClick={() => console.log("Clicked")}>Shop more </Button>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}
export default App;
