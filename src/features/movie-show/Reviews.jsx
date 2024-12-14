import { FiPlus } from "react-icons/fi";
import Review from "./Review";
import { SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Scroll from "../../ui/Scroll";
import useWidth from "../../hooks/useWidth";
import { useQuery } from "@tanstack/react-query";
import { getMovieReviews } from "../../services/apiReviews";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import useOutSideClick from "../../hooks/useOutSideClick";

function Reviews() {
  const {
    ref,
    open: isWriteReview,
    setOpen: setIsWriteReview,
  } = useOutSideClick();

  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const data = await getMovieReviews(id);
      return data;
    },
  });
  const width = useWidth();

  function handleClickAddReview() {
    setIsWriteReview(true);
  }

  return (
    <>
      <div className="flex w-full flex-col gap-[30px] rounded-[10px] border border-black-shade-5 bg-black-shade-3 p-10 max-sm:p-6">
        <div className="flex h-12 items-center justify-between">
          <p className="font-medium">Reviews</p>
          <button
            className="flex h-[48px] items-center gap-1 rounded-md border border-black-shade-5 bg-black-shade-2 p-3 text-sm font-medium text-white"
            onClick={handleClickAddReview}
          >
            <FiPlus className="h-6 w-6 text-white" />
            Add Your Review
          </button>
        </div>

        {data?.results?.length > 0 ? (
          <>
            <Scroll
              nextEl={`nextReviewEL`}
              prevEL={`prevReviewsEL`}
              pagination={`reviewsPagenation`}
            >
              <Scroll.Row
                data={data?.results}
                spaceBetween={10}
                slidesPerView={width >= 768 ? 2 : 1}
                slidesPerGroup={2}
                isWriteReview={isWriteReview}
                className={"ReviewsTarget"}
                render={(el) => {
                  if (el.author_details.rating)
                    return (
                      <SwiperSlide key={el?.id}>
                        <Review
                          stars={el.author_details.rating - 2}
                          name={el.author_details.username}
                          country="US"
                          text={el.content}
                        />
                      </SwiperSlide>
                    );
                }}
              >
                {isWriteReview && (
                  <>
                    <SwiperSlide>
                      <div ref={ref}>
                        <ReviewForm setIsWriteReview={setIsWriteReview} />
                      </div>
                    </SwiperSlide>
                  </>
                )}
              </Scroll.Row>
            </Scroll>

            <div className="mx-auto flex w-[189px] items-center gap-2.5 max-sm:w-auto">
              <button className="prevReviewsEL flex h-11 min-w-11 items-center justify-center rounded-full border border-black-shade-5 bg-black-shade-2">
                <IoArrowBack className="h-5 w-5 text-gray-shade-1" />
              </button>
              <div
                className={`reviewsPagenation flex h-1 items-center justify-center gap-1`}
              ></div>
              <button className="nextReviewEL flex h-11 min-w-11 items-center justify-center rounded-full border border-black-shade-5 bg-black-shade-2">
                <IoArrowForward className="h-5 w-5 text-gray-shade-1" />
              </button>
            </div>
          </>
        ) : (
          <>
            {isWriteReview && (
              <>
                <SwiperSlide>
                  <div ref={ref}>
                    <ReviewForm setIsWriteReview={setIsWriteReview} />
                  </div>
                </SwiperSlide>
              </>
            )}

            {!isWriteReview && (
              <p className="m-auto w-fit rounded-[10px] border border-black-shade-5 bg-black-shade-2 px-10 py-5 text-center text-2xl font-semibold text-white">
                No Reviews Yet
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Reviews;
