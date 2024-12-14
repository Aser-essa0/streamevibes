import Stars from "../../ui/Stars";

// eslint-disable-next-line react/prop-types
function Review({ stars, name, country, text }) {
  return (
    <div className="h-[223px] rounded-xl border border-black-shade-5 bg-black-shade-2 p-[30px]">
      <div className="flex h-[51px] items-center justify-between">
        <div className="font-medium">
          <p className="text-lg text-white">{name}</p>
          <p>From {country}</p>
        </div>
        <div className="flex items-center gap-0.5 rounded-[51px] border border-black-shade-5 bg-black-shade-2 px-2 py-1">
          <Stars rate={stars} />
          <span>{stars}</span>
        </div>
      </div>
      <p className="mt-4 h-[95px] overflow-hidden text-ellipsis leading-[150%]">
        {text}
      </p>
    </div>
  );
}

export default Review;
