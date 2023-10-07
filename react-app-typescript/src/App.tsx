import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisiable] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisiable(false)}>
          Hello <span>World</span>
        </Alert>
      )}

      <Button onClick={() => setAlertVisiable(true)}>Button</Button>
      <Like onClick={() => console.log("Clicked")} />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}
export default App;
