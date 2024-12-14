import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Button from "../../ui/Button";
import { FaPlay } from "react-icons/fa6";
import { LuPlus } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import Scroll from "../../ui/Scroll";
import { useMoviesData } from "./useMoviesData";
import Skeleton from "react-loading-skeleton";

function Banners() {
  const navigate = useNavigate();
  let { data } = useMoviesData();
  data = data?.filter((el) => el?.backdrop_path != undefined);

  const array = Array.from({ length: 8 }, (num) => num++);

  return (
    <>
      <div className="mt-10">
        <div className="relative overflow-hidden max-sm:h-[468px]">
          <Scroll
            nextEl={`next-scrolll-button`}
            prevEL={`prev-scrolll-button`}
            pagination={`paginationnn`}
          >
            <Scroll.Row
              data={data?.length > 0 ? data?.slice(0, 8) : array}
              render={(el, idx) => {
                return (
                  <SwiperSlide
                    key={`${el.id}${idx}`}
                    className="relative rounded-xl"
                  >
                    {data ? (
                      <img
                        className="h-[709px] w-full rounded-xl"
                        src={`
                https://image.tmdb.org/t/p/original${el?.backdrop_path}`}
                      />
                    ) : (
                      <div className="h-[709px] w-full">
                        <Skeleton width={"100%"} height={"100%"} />
                      </div>
                    )}
                    <div className="absolute inset-0 z-[0] h-full w-full bg-gradient-to-t from-[#141414] to-[#14141400] max-sm:hidden"></div>

                    <div className="absolute left-[50%] top-[434px] flex w-[960px] translate-x-[-50%] flex-col items-center max-sm:top-[240px]">
                      <p className="text-center text-[30px] font-bold leading-[150%] text-white max-sm:w-[310px] max-sm:text-2xl">
                        {el?.original_title}
                      </p>
                      <p className="text-center leading-[150%] max-sm:hidden">
                        {el?.overview}
                      </p>
                      <div className="mt-6 flex items-center justify-center gap-5 max-sm:flex-col">
                        <Button
                          onClick={() => navigate(`/movie/${el.id}`)}
                          className="h-[52px] w-[130px] text-nowrap"
                        >
                          <FaPlay className="h-6 w-6" />
                          Play Now
                        </Button>
                        <div className="flex items-center gap-2">
                          <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
                            <LuPlus className="h-6 w-6 text-white" />
                          </span>
                          <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
                            <BiLike className="h-6 w-6 text-white" />
                          </span>
                          <span className="flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-black-shade-4 bg-black-shade-2">
                            <HiOutlineSpeakerWave className="h-6 w-6 text-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }}
            />
          </Scroll>
          <div className="absolute bottom-4 left-[50%] flex w-[calc(100%-80px)] translate-x-[-50%] items-center justify-between rounded-[10px] max-lg:min-w-[180px] max-lg:p-2 max-sm:hidden">
            <button className="prev-scrolll-button flex h-11 min-w-11 items-center justify-center rounded-md border border-black-shade-4 bg-black-shade-3 max-lg:h-9 max-lg:min-w-9">
              <IoArrowBack className="h-6 w-6 text-white" />
            </button>
            <div className="paginationnn flex h-1 items-center justify-center gap-1"></div>
            <button className="next-scrolll-button flex h-11 min-w-11 items-center justify-center rounded-md border border-black-shade-4 bg-black-shade-3 max-lg:h-9 max-lg:min-w-9">
              <IoArrowForward className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banners;
