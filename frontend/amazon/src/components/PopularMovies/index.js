import { useState, useEffect } from "react";
import DisplayData from "../DisplayData";

const PopularMovies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/shows/popularmovies")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data.payload));
  }, []);

  return (
    <div className="popularMovies" style={{ display: "inline" }}>
      <DisplayData data={data} />
    </div>
  );
};

export default PopularMovies;
