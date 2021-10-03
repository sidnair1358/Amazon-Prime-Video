// import { useState, useEffect } from "react";
import DisplayData from "../DisplayData";
import RenderData from "../RenderData";
import useFetch from "../useFetch";

const TopRatedTV = ({ title }) => {
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/shows/topratedtv"
  );
  return (
    <>
      <h3>{title}</h3>
      <RenderData
        data={data}
        isPending={isPending}
        error={error}
        DisplayData={DisplayData}
      />
    </>
  );
};

export default TopRatedTV;
