const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODY4ODA5OS43OTIwNTUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oID298oze4F4U3OfGr9naQqj7wTMfazeXK_X-Xd79B4",
  },
};

export async function getMovieCredits(id) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options,
  );
  const data = await response.json();

  return data;
}

export async function getShowCredits(id) {
  let response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
    options,
  );
  const data = await response.json();

  return data;
}
