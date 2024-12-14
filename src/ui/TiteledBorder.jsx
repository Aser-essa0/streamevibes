// eslint-disable-next-line react/prop-types
function TiteledBorder({ title, children, plan, setPlan }) {
  return (
    <>
      <div className="relative mt-[100px] flex h-fit flex-col gap-20 rounded-xl border border-black-shade-5 p-10 max-sm:mt-[80px] max-sm:gap-[50px] max-sm:border-none max-sm:p-0">
        <div className="absolute left-10 top-[-20px] flex h-10 w-[95px] items-center justify-center rounded-md bg-red-shade-1 font-semibold text-white max-sm:hidden">
          {title}
        </div>

        <div className="hidden h-[61px] w-full items-center rounded-lg border border-black-shade-5 bg-black-shade-1 p-2 max-sm:flex">
          <button
            className={`h-[45px] w-[50%] ${plan === "movies" ? "rounded-md bg-black-shade-4 text-white" : ""}`}
            onClick={() => setPlan("movies")}
          >
            movies
          </button>
          <button
            className={`h-[45px] w-[50%] ${plan === "shows" ? "rounded-md bg-black-shade-4 text-white" : ""}`}
            onClick={() => setPlan("shows")}
          >
            shows
          </button>
        </div>

        {children}
      </div>
    </>
  );
}

export default TiteledBorder;
