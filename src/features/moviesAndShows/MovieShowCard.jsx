/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Suggestion from "../../ui/Suggestion";
import Release from "../../ui/Release";
import Trending from "../../ui/Trending";

function MovieShowCard({
  poster,
  runtime,
  ShapeType,
  isLoading,
  type,
  date,
  rate,
  el,
}) {
  console.log(isLoading, "DDDDDD");
  return (
    <NavLink to={isLoading ? "/movies&shows" : `/${type}/${el?.id}`}>
      <div className="relative grid h-fit w-full grid-cols-2 gap-4">
        {poster ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            className="col-span-2 h-[232px] w-full rounded-[10px]"
          />
        ) : (
          <div className="col-span-2">
            <Skeleton width={"100%"} height={232} />
          </div>
        )}
        {ShapeType === "trending" && (
          <>
            {el ? (
              <Trending runtime={runtime} />
            ) : (
              <div className="col-span-2 h-[18px] w-full">
                <Skeleton width={"100%"} height={"100%"} />
              </div>
            )}
          </>
        )}
        {ShapeType === "releases" && (
          <>
            {el ? (
              <Release date={date} />
            ) : (
              <div className="col-span-2 h-[18px] w-full">
                <Skeleton width={"100%"} height={"100%"} />
              </div>
            )}
          </>
        )}

        {ShapeType === "suggestion" && (
          <>
            {el ? (
              <Suggestion runtime={runtime} rate={rate} />
            ) : (
              <div className="col-span-2 h-[18px] w-full">
                <Skeleton width={"100%"} height={"100%"} />
              </div>
            )}
          </>
        )}
      </div>
    </NavLink>
  );
}

export default MovieShowCard;
