/* eslint-disable react/prop-types */
import { SwiperSlide } from "swiper/react";
import Scroll from "./Scroll";
import { cloneElement } from "react";
import useWidth from "../hooks/useWidth";

function ScrollRow({ data, children }) {
  const width = useWidth();
  const array = Array.from({ length: 10 }, (num) => num++);
  const slides =
    Math.floor((width - 160) / 239.8) >= 2
      ? Math.floor((width - 160) / 239.8)
      : 2;

  return (
    <>
      <Scroll.Row
        data={data?.length > 0 ? data : array}
        spaceBetween={20}
        slidesPerView={slides}
        slidesPerGroup={
          Math.floor((width - 160) / 239.8) >= 2
            ? Math.floor((width - 160) / 239.8)
            : 2
        }
        render={(el, idx) => {
          return (
            <SwiperSlide
              key={`${idx}`}
              className="h-fit w-[239.8px] cursor-pointer rounded-[10px] bg-black-shade-3 p-4 max-sm:p-3"
            >
              {cloneElement(children, {
                el: el,
                data: el?.data,
                name: el?.name,
                poster: el?.poster_path,
                runtime:
                  el?.runtime ||
                  el?.last_episode_to_air?.runtime *
                    el?.last_episode_to_air?.episode_number,
                date: el?.release_date || el.first_air_date,
                rate: el?.vote_average - 2,
              })}
            </SwiperSlide>
          );
        }}
      />
    </>
  );
}

export default ScrollRow;
