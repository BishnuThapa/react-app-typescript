import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisiable] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [cartItems, setCartItems] = useState([
    "Product1",
    "Product2",
    "Product3",
  ]);
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
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}
export default App;
