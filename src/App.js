import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Rawposters from "./Components/Rawposters/Rawposters";
import {
  originals,
  comedymovies,
  horrormovies,
  actionmovies,
  comedyseries,
  romanticseries,
  romanticmovies,
  dramaseries,
  dramamovies,
} from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rawposters url={originals} title="Netflix Originals" />
      <Rawposters url={comedymovies} title="Comedy Movies" movie isSmall />
      <Rawposters url={dramamovies} title="Drama Movies" movie isSmall />
      <Rawposters url={romanticmovies} title="Romantic Movies" movie isSmall />
      <Rawposters url={horrormovies} title="Horror Movies" movie isSmall />
      <Rawposters url={actionmovies} title="Action Movies" movie isSmall />
      <Rawposters url={comedyseries} title="Comedy Series" isSmall />
      <Rawposters url={romanticseries} title="Romantic Series" isSmall />
      <Rawposters url={dramaseries} title="Drama Series" isSmall />
    </div>
  );
}

export default App;
