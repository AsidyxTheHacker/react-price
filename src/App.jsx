import './App.css'
import Item from './Components/Item/Item';
import Logo from './Components/Logo/Logo';
import TitleCard from './Components/TitleCard/TitleCard';

function App() {

  return (
    <>
      <div className="container">
        <TitleCard />
        <Logo />
        <Item />
      </div>
    </>
  );
};

export default App;