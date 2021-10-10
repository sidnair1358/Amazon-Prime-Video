import { useState } from "react";
import DisplayData from "../DisplayData";
import RenderData from "../RenderData";
import useFetch from "../useFetch";

const PopularMovies = ({ title }) => {
  const [name, setName] = useState("");
  const [overview, setOverview] = useState(
    "Hover over a movie to get the overview"
  );
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/shows/popularmovies"
  );
  const handleHover = (name, overview) => {
    setName(name);
    setOverview(overview);
  };

  return (
    <>
      <div className="movieInfo">
        <h1>{name}</h1>
        <h2>{overview}</h2>
        <h3>{title}</h3>
      </div>
      <RenderData
        data={data}
        isPending={isPending}
        error={error}
        DisplayData={DisplayData}
        handleHover={handleHover}
      />
    </>
  );
};

export default PopularMovies;
