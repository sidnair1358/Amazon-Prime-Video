import DisplayData from "../DisplayData";
import RenderData from "../RenderData";
import useFetch from "../useFetch";
import { useState } from "react";

const PopularTV = ({ title }) => {
  const [name, setName] = useState("");
  const [overview, setOverview] = useState("");
  const { data, isPending, error } = useFetch(
    "http://localhost:3000/shows/populartv"
  );
  const handleHover = (name, overview) => {
    setName(name);
    setOverview(overview);
  };
  return (
    <>
      <h1>{name}</h1>
      <h2>{overview}</h2>
      <h3>{title}</h3>
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

export default PopularTV;
