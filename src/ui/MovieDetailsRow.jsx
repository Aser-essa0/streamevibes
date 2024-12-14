// eslint-disable-next-line react/prop-types
function MovieDetailsRow({ children }) {
  return (
    <>
      <div className="flex flex-col gap-2.5">{children}</div>
    </>
  );
}

export default MovieDetailsRow;
