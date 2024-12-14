// eslint-disable-next-line react/prop-types
function MovieDetails({ children }) {
  return (
    <div className="movie-and-show-container mt-20 grid gap-5 max-[1211px]:grid-cols-1">
      {children}
    </div>
  );
}

export default MovieDetails;
