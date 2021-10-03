const DisplayData = ({ data, handleHover }) => {
  return (
    <div className="data-list" style={{ display: "flex" }}>
      {data.map((movie) => (
        <div
          key={movie.id}
          onMouseEnter={() => handleHover(movie.title, movie.overview)}
        >
          <img src={movie.poster_path} alt="movie poster" />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
