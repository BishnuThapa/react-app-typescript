import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { ExpandableText } from "./components/ExpandableText";

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
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cumque
        accusamus minima temporibus aut atque voluptas reprehenderit laborum
        esse, eius ipsum amet commodi sint error, possimus excepturi, illo ad
        officia mollitia earum eos ex? Voluptas quidem et numquam sequi ipsa
        quam optio minus adipisci itaque cum perspiciatis voluptatem corrupti
        dicta ullam, fuga suscipit quis laborum doloremque. At officia
        praesentium perferendis laboriosam libero est eveniet molestias possimus
        soluta fuga dolore sequi ad assumenda repudiandae tempore voluptas esse
        sunt aperiam eius ut, cum ipsum a dolorum quasi! Non repellendus
        exercitationem dignissimos eum minima nobis dicta fugit, laudantium quam
        accusantium dolor at pariatur.
      </ExpandableText>
    </>
  );
}
export default App;
