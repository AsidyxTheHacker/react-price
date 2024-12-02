import { useState } from 'react';
import './App.css';
import Item from './Components/Item/Item';
import Logo from './Components/Logo/Logo';
import TitleCard from './Components/TitleCard/TitleCard';

function App() {
  const [getParentProduct, setGetParentProduct] = useState(null);
  const [handleItem, setHandleItem] = useState(null);

  const handleParentProduct = (item) => {
    setGetParentProduct(item);
  };

  const handleItemFunction = () => {
    console.log("handleItem function was triggered");
    // You can replace this with any logic you want to test
  };

  return (
    <div className="container">
      <TitleCard />
      <Logo
        parentProduct={handleParentProduct}
        handleItem={handleItemFunction}  // Pass your function here
      />
      <Item getParentProduct={getParentProduct} setHandleItem={setHandleItem} />
    </div>
  );
}

export default App;