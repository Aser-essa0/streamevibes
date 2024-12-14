import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import Scroll from "../../ui/Scroll";
import useWidth from "../../hooks/useWidth";
import { useCredits } from "./useCredits";

function Cast() {
  const width = useWidth();
  const { data } = useCredits();

  const castData = data?.cast?.filter(
    (el) => el.gender === 2 && el.cast_id !== 103,
  );

  return (
    <>
      <div className="flex w-full flex-col gap-5 rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-10 max-sm:p-6">
        <div className="flex h-11 items-center justify-between">
          <p className="">Cast</p>
          <div className="flex items-center gap-2">
            <button className="prevCastEL flex h-11 w-11 items-center justify-center rounded-full border border-black-shade-5 bg-black-shade-2">
              <IoArrowBack className="h-5 w-5 text-gray-shade-1" />
            </button>
            <button className="nextCastEL flex h-11 w-11 items-center justify-center rounded-full border border-black-shade-5 bg-black-shade-2">
              <IoArrowForward className="h-5 w-5 text-gray-shade-1" />
            </button>
          </div>
        </div>

        <Scroll nextEl={`nextCastEL`} prevEL={`prevCastEL`}>
          <Scroll.Row
            data={castData}
            spaceBetween={10}
            slidesPerView={width >= 768 ? 8 : 4}
            slidesPerGroup={5}
            render={(el, idx) => {
              if (el.profile_path)
                return (
                  <SwiperSlide
                    key={`${el.credit_id}${idx}`}
                    className="min-w-[87.5px] max-sm:min-w-[70px]"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      className="h-[89px] min-w-full rounded-[10px] max-sm:h-[75px]"
                    />
                  </SwiperSlide>
                );
            }}
          />
        </Scroll>
      </div>
    </>
  );
}

export default Cast;
