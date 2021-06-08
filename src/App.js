import "./App.css";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import Trending from "./components/Trending";
import "./components/styles.css";

function App() {
  return (
    <div className="App">
      <Trending />
      <Favorites />
      <Search />
    </div>
  );
}

export default App;
