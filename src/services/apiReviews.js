const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODY4ODA5OS43OTIwNTUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oID298oze4F4U3OfGr9naQqj7wTMfazeXK_X-Xd79B4",
  },
};

export async function getMovieReviews(id) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options,
  );
  const data = await response.json();

  return data;
}

export async function getShowReviews(id) {
  let response = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`,
    options,
  );
  const data = await response.json();

  return data;
}

export async function reviewMovie({
  movieId,
  sessionId,
  guest_session_id,
  rating,
}) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${guest_session_id}&session_id=${sessionId}`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjBlZTNlNTljM2MzMTVkN2U4ZjE0MWU3Y2MzOWZhYSIsIm5iZiI6MTcyODY4ODA5OS43OTIwNTUsInN1YiI6IjY3MDNmMDk4MTc0YTFkNTc3Mzc5NjI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oID298oze4F4U3OfGr9naQqj7wTMfazeXK_X-Xd79B4",
    },
    body: JSON.stringify({ value: rating }),
  };
  const response = await fetch(url, options);
  const data = await response.json();

  if (!data.success) {
    throw new Error(`${data.status_message}`);
  }
  return data;
}
