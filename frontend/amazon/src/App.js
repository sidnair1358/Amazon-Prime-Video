import "./App.css";
import useFetch from "./components/useFetch";
import Card from "./components/Card";
import Slide from "./components/Slide";

function App() {
  const {
    data: popularMovies,
    isPending,
    error,
  } = useFetch("http://localhost:3000/shows/popularmovies");

  const { data: popularTv } = useFetch("http://localhost:3000/shows/populartv");

  const { data: topRatedMovies } = useFetch(
    "http://localhost:3000/shows/topratedmovies"
  );

  const { data: topRatedTv } = useFetch(
    "http://localhost:3000/shows/topratedtv"
  );

  return (
    <div className="App">
      <Card
        title="Popular Movies"
        data={popularMovies}
        isPending={isPending}
        error={error}
      />
      <Card
        title="Top Rated Movies"
        data={topRatedMovies}
        isPending={isPending}
        error={error}
      />
      <Card
        title="Popular TV"
        data={popularTv}
        isPending={isPending}
        error={error}
      />
      <Card
        title="Top Rated TV"
        data={topRatedTv}
        isPending={isPending}
        error={error}
      />
    </div>
  );
}

export default App;
