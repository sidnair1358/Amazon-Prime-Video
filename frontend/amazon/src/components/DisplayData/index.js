const DisplayData = ({ data }) => {
  return (
    <div className="data-list">
      {data.map((movie) => (
        <div key={movie.id}>
          <img src={movie.poster_path} alt="movie poster" />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
