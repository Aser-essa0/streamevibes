/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import SectionHeader from "./SectionHeader";
import ScrollController from "./ScrollController";
import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWidth from "../hooks/useWidth";

const scrollContext = createContext();

function Scroll({ nextEl, prevEL, pagination, topTen, id, children }) {
  const width = useWidth();

  return (
    <>
      <scrollContext.Provider
        value={{ nextEl, prevEL, pagination, width, topTen }}
      >
        <div className="overflow-hidden" id={id}>
          {children}
        </div>
      </scrollContext.Provider>
    </>
  );
}

function Row({
  data,
  spaceBetween,
  slidesPerView,
  slidesPerGroup,
  children,
  render = () => {},
}) {
  const { nextEl, prevEL, pagination, width } = useContext(scrollContext);
  return (
    <>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        watchSlidesProgress={true}
        navigation={{
          nextEl: `.${nextEl}`,
          prevEl: `.${prevEL}`,
          clickable: true,
        }}
        pagination={{
          el: `.${pagination || "not-found"}`,
          clickable: true,
          type: `${width >= 768 ? "bullets" : "progressbar"}`,
        }}
        modules={[Navigation, Pagination]}
        className="swiper-container relative flex w-full items-center gap-5"
        wrapperClass={`flex items-center`}
      >
        {children}
        {data?.map(render)}
      </Swiper>
      {width <= 768 && (
        <div
          className={`${pagination} flex h-1 items-center justify-center gap-1 overflow-hidden rounded-[20px]`}
        ></div>
      )}
    </>
  );
}

function Header({ title, paragraph, className }) {
  const { nextEl, prevEL, pagination } = useContext(scrollContext);
  return (
    <>
      <SectionHeader title={title} paragraph={paragraph} className={className}>
        <ScrollController
          nextEl={nextEl}
          prevEL={prevEL}
          pagination={pagination}
        />
      </SectionHeader>
    </>
  );
}

Scroll.Row = Row;
Scroll.Header = Header;

export { Row, Header };
export default Scroll;
// eslint-disable-next-line react-refresh/only-export-components
export { scrollContext };
