import "./App.css";
import PopularMovies from "./components/PopularMovies";
import PopularTV from "./components/PopularTV";
import TopRatedMovies from "./components/TopRatedMovies";
import TopRatedTV from "./components/TopRatedTV";

function App() {
  return (
    <div className="App">
      <PopularMovies title={"Popular Movies"} />
      <TopRatedMovies title={"Top Rated Movies"} />
      <PopularTV title={"Popular TV SHows"} />
      <TopRatedTV title={"Top Rated TV Shows"} />
    </div>
  );
}

export default App;
