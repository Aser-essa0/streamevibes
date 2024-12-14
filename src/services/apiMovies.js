const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODQyNzIwOS4zMTY3MzUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IdyUBDZsJjkDaIvesijUPHSdGIto-5ikACH6UtVYnN8",
  },
};

export async function getMovieData(id) {
  try {
    if (id) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options,
      );
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err);
  }
}

export async function getMovies() {
  try {
    let allData = [];
    for (let i = 1; i <= 10; i++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${i}&sort_by=popularity.desc`,
        options,
      );
      const data = await response.json();
      allData.push(...data.results);
    }
    allData = allData.filter(
      (el) =>
        !el.genre_ids.some((id) => id === 99 || id === 18 || id === 10749),
    );
    const moviesData = allData.map((el) => getMovieData(el.id));
    const data = Promise.all(moviesData).then((respones) => {
      return respones;
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
