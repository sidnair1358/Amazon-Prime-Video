import { useState } from "react";
import DisplayData from "../DisplayData";

const PopularMovies = () => {
  const [data, setData] = useState([]);

  return (
    <div className="popularMovies">
      <DisplayData data={data} />
    </div>
  );
};

export default PopularMovies;
