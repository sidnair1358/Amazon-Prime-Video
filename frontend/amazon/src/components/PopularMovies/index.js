// import { useState, useEffect } from "react";
import DisplayData from "../DisplayData";
import RenderData from "../RenderData";
import useFetch from "../useFetch";

const PopularMovies = () => {
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/shows/popularmovies"
  );
  return (
    <RenderData
      data={data}
      isPending={isPending}
      error={error}
      DisplayData={DisplayData}
    />
  );
};

export default PopularMovies;
