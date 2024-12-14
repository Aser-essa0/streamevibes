import { useMoviesData } from "../moviesAndShows/useMoviesData";

function WelcomeSupport() {
  const { data } = useMoviesData();
  return (
    <div>
      <div className="mb-10">
        <p className="mb-2.5 text-[38px] font-bold text-white">
          Welcome to our support page!
        </p>
        <p>
          We&apos;re here to help you with any problems you may be having with
          our product.
        </p>
      </div>
      <div className="relative h-[383px] overflow-hidden rounded-[4px] border-[6px] border-black-shade-5">
        <div className="absolute left-0 top-[-45px] z-[-1] grid h-[699px] w-full grid-cols-4 gap-2.5 overflow-hidden filter max-lg:grid-cols-7 max-sm:h-[500px] max-sm:grid-cols-3">
          {data?.slice(0, 36).map((img) => {
            if (img.poster_path)
              return (
                <img
                  key={img.poster_path}
                  src={`https://image.tmdb.org/t/p/w500${img.poster_path}`}
                  className="z-[-100] h-[121.75px] w-[97.25px] rounded-xl"
                />
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default WelcomeSupport;
