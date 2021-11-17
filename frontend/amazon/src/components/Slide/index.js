import React from "react";
import "./style.css";

export default function Slide({ data }) {
  return (
    <div className="carousel-wrapper">
      {data.map((movie) => (
        <div className="carousel">
          <img src={movie.poster_path} alt="movie poster" />
        </div>
      ))}
    </div>
  );
}
