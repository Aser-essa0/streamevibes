import useWidth from "../hooks/useWidth";

function Description() {
  const width = useWidth();
  return (
    <>
      <div className="flex w-full flex-col justify-center gap-2.5">
        <p className="mt-[99px] text-center text-5xl font-bold leading-[150%] text-white max-sm:mt-[50px] max-sm:text-[28px]">
          The Best Streaming Experience
        </p>
        <p className="mx-auto max-w-[1140px] text-wrap text-center text-sm leading-[150%]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
          {width >= 768 && (
            <span>
              With StreamVibe, you can enjoy a wide variety of content,
              including the latest blockbusters, classic movies, popular TV
              shows, and more. You can also create your own watchlists, so you
              can easily find the content you want to watch.
            </span>
          )}
        </p>
      </div>
    </>
  );
}

export default Description;
