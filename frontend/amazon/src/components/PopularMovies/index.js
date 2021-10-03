import { useState, useEffect } from "react";
import DisplayData from "../DisplayData";

const PopularMovies = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/shows/popularmovies")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data.payload);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="popularMovies">
      {isPending && <div>Loading ...</div>}
      {data && <DisplayData data={data} />}
    </div>
  );
};

export default PopularMovies;
