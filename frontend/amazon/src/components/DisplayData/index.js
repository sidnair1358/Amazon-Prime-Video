import Carousel from "react-elastic-carousel";

const DisplayData = ({ data, handleHover }) => {
  const breakPoints = [
    {
      width: 500,
      itemsToShow: 1,
    },
    {
      width: 768,
      itemsToShow: 2,
    },
    {
      width: 1200,
      itemsToShow: 3,
    },
    {
      width: 1500,
      itemsToShow: 5,
    },
  ];
  return (
    <div className="data-list">
      <Carousel breakPoints={breakPoints}>
        {data.map((movie) => (
          <div
            className="card"
            key={movie.id}
            onMouseEnter={() => handleHover(movie.title, movie.overview)}
          >
            <img src={movie.poster_path} alt="movie poster" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DisplayData;
