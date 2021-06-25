import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Rawposters from "./Components/Rawposters/Rawposters";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rawposters />
    </div>
  );
}

export default App;
