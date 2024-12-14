/* eslint-disable react/prop-types */
import { memo } from "react";
import Button from "./Button";
import SectionHeader from "./SectionHeader";
import { useNavigate } from "react-router-dom";

const Ad = memo(function Ad({ data }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/supscriptions");
  }

  return (
    <>
      <div className="relative m-auto w-full max-lg:w-[413.33px] max-sm:h-[344px] max-sm:w-full">
        <div className="max-sm:lg-[30px] mt-[108px] flex h-full w-full items-center justify-between rounded-xl px-[60px] py-[80px] max-lg:flex-col max-lg:items-center max-lg:justify-between max-lg:py-[50px] max-lg:text-center max-sm:mt-[80px]">
          <SectionHeader
            title="Start your free trial today!"
            paragraph="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe."
          />

          <Button className="h-[52px]" onClick={handleClick}>
            Start a Free Trail
          </Button>
        </div>
        <div className="absolute left-0 top-0 z-[-1] flex h-full w-full flex-wrap gap-5 overflow-hidden rounded-xl filter max-lg:grid max-lg:grid-cols-4 max-sm:grid-cols-3">
          {data?.slice(0, 40)?.map((img, idx) => {
            if (img?.backdrop_path)
              return (
                <img
                  key={`${img.poster_path}${idx}`}
                  src={`https://image.tmdb.org/t/p/w500${img?.backdrop_path}`}
                  height={73.75}
                  width={124.56}
                  className="z-[-100] h-[73.75px] w-[124.56px]"
                />
              );
          })}
          <div className="ad absolute inset-0 w-full rounded-xl"></div>
        </div>
      </div>
    </>
  );
});

export default Ad;
