import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import Episode from "./Episode";
import { useState } from "react";
import EpisodeLoading from "./EpisodeLoading";
import { useEpisodes } from "./useEpisodes";
import Button from "../../ui/Button";

/* eslint-disable react/prop-types */
function SeasonList({ season, idx }) {
  const [open, setOpen] = useState(false);
  const [numberOfIncrease, setNumberOfIncrease] = useState(10);
  const { episodesData, isLoading } = useEpisodes();

  function handleClickOpen() {
    setOpen((open) => !open);
  }

  function handleShowMore() {
    setNumberOfIncrease((num) => (num += 10));
  }

  if (season.season_number > 0)
    return (
      <div className="mb-4 flex flex-col rounded-[10px] bg-black-shade-1 px-10 py-5 max-md:px-5 max-md:py-2.5">
        <div
          className={`flex items-center gap-2 ${open ? "mb-6 max-md:mb-2.5" : ""}`}
        >
          <p className="text-xl font-semibold text-white">
            Season{" "}
            {season.season_number <= 9
              ? `0${season.season_number}`
              : season.season_number}
          </p>
          <p className="font-medium">{season.episode_count - 1} Episodes</p>
          <button
            onClick={handleClickOpen}
            className="ml-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-[100px] border border-black-shade-5 bg-black-shade-2"
          >
            {open ? (
              <IoArrowUpOutline className="h-5 w-5 text-gray-shade-1" />
            ) : (
              <IoArrowDownOutline className="h-5 w-5 text-gray-shade-1" />
            )}
          </button>
        </div>
        {isLoading
          ? open &&
            Array.from({ length: season.episode_count }, (num) => num++)
              ?.slice(0, numberOfIncrease)
              .map((el, idx) => <EpisodeLoading key={idx} idx={idx} />)
          : episodesData
              ?.at(idx - 1)
              ?.slice(0, numberOfIncrease)
              ?.map((el, idx) => {
                return (
                  open && (
                    <Episode key={`${el.id}${idx}`} episode={el} idx={idx} />
                  )
                );
              })}
        {open && season.episode_count - 1 > numberOfIncrease && (
          <Button
            onClick={handleShowMore}
            className={"mx-auto mb-3 h-[35px] w-[130px]"}
          >
            Show More
          </Button>
        )}
      </div>
    );
}

export default SeasonList;
