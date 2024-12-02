import { useState } from 'react';
import './App.css';
import Item from './Components/Item/Item';
import Logo from './Components/Logo/Logo';
import TitleCard from './Components/TitleCard/TitleCard';

function App() {
  const [getParentProduct, setGetParentProduct] = useState(null);

  const handleParentProduct = (item) => {
    setGetParentProduct(item);
  };

  return (
    <div className="container">
      <TitleCard />
      <Logo
        parentProduct={handleParentProduct}
      />
      <Item getParentProduct={getParentProduct} />
    </div>
  );
};

export default App;