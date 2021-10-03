const { query } = require("../index");
const fetch = require("node-fetch");

const apiKey = "d005f1b22ad34c2c5d7857467122a7b1";

async function getPopularMovies() {
  const response = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=6`);
  console.log("response", response);
  let data = await response.json();
  let result = data.results;
  console.log(result);
  for (let i of result) {
    const { title, vote_average, overview, poster_path, reviews, genre_ids } =
      i;

    const res = await query(
      `INSERT INTO popularMovies( title, vote_average, overview, poster_path, reviews, genreId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        title,
        vote_average,
        overview,
        `https://image.tmdb.org/t/p/w500/${poster_path}`,
        reviews,
        genre_ids,
      ]
    );
    console.log(res.rows);
  }
}

async function getTopRatedMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=6`
  );
  let data = await response.json();
  let result = data.results;
  console.log(result);
  for (let i of result) {
    const { title, vote_average, overview, poster_path, reviews, genre_ids } =
      i;

    const res = await query(
      `INSERT INTO topRatedMovies( title, vote_average, overview, poster_path, reviews, genreId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        title,
        vote_average,
        overview,
        `https://image.tmdb.org/t/p/w500/${poster_path}`,
        reviews,
        genre_ids,
      ]
    );
    console.log(res.rows);
  }
}

async function getPopularTV() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=6`
  );
  let data = await response.json();
  let result = data.results;
  for (let i of result) {
    const { name, vote_average, overview, poster_path, reviews, genre_ids } = i;

    const res = await query(
      `INSERT INTO popularTV( title, vote_average, overview, poster_path, reviews, genreId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        name,
        vote_average,
        overview,
        `https://image.tmdb.org/t/p/w500/${poster_path}`,
        reviews,
        genre_ids,
      ]
    );
    console.log(res.rows);
  }
}

async function getTopRatedTV() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=6`
  );
  let data = await response.json();
  let result = data.results;
  for (let i of result) {
    const { name, vote_average, overview, poster_path, reviews, genre_ids } = i;

    const res = await query(
      `INSERT INTO topRatedTV( title, vote_average, overview, poster_path, reviews, genreId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        name,
        vote_average,
        overview,
        `https://image.tmdb.org/t/p/w500/${poster_path}`,
        reviews,
        genre_ids,
      ]
    );
    console.log(res.rows);
  }
}

getPopularMovies();
getPopularTV();
getTopRatedMovies();
getTopRatedTV();
