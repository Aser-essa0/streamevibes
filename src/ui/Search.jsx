import { useState } from "react";
import { createPortal } from "react-dom";
import { CiSearch } from "react-icons/ci";
import { useMoviesData } from "../features/moviesAndShows/useMoviesData";
import useOutSideClick from "../hooks/useOutSideClick";
import { Link } from "react-router-dom";

function Search() {
  const { data } = useMoviesData();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  function changeHandler(e) {
    setSearch(e.target.value);
    setMovies(
      data?.filter((el) =>
        el?.original_title?.toLowerCase()?.includes(search?.toLowerCase()),
      ),
    );
  }
  const { ref, open, setOpen } = useOutSideClick();
  return (
    <>
      <CiSearch
        className="h-6 w-6 cursor-pointer text-white"
        onClick={() => setOpen((open) => !open)}
      />
      {createPortal(
        open && (
          <div className="absolute right-20 top-[70px] z-50" ref={ref}>
            <input
              type="text"
              value={search}
              onChange={changeHandler}
              placeholder="Search"
              className="h-[45px] w-[350px] rounded-lg border border-black-shade-5 bg-black-shade-1 px-5 py-2 text-sm focus:outline-none"
            />
            {search.length > 0 && (
              <div className="mt-1 flex w-[350px] flex-col divide-y-[1px] divide-black-shade-5 rounded-lg border border-black-shade-5 bg-black-shade-1 p-5 px-3">
                {movies?.slice(0, 6)?.map((el, idx) => (
                  <Link
                    to={`/movie/${el.id}`}
                    key={`${el.id}${idx}`}
                    className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-black-shade-3"
                    onClick={() => {
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.backdrop_path}`}
                      className="h-[50px] w-[80px] rounded-sm"
                    />
                    <p className="font-semibold text-white">
                      {el?.original_title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ),
        document.body,
      )}
    </>
  );
}

export default Search;
